// actions/adminActions.js

import axios from 'axios';
import setAuthToken from '../setAuthToken';
import JWT from 'expo-jwt';
import { Alert } from 'react-native';

import * as SecureStore from 'expo-secure-store';

let apiUrl = "https://arj-erp-api.vercel.app";

// Action Types
export const SET_ADMIN = 'SET_ADMIN';
export const GET_ALL_STUDENT = 'GET_ALL_STUDENT'; // Define the action type for getting all students

// Action Creators
export const setAdminUser = data => ({
  type: SET_ADMIN,
  payload: data
});

// Define an action creator to set all students
export const setAllStudents = students => ({
  type: GET_ALL_STUDENT,
  payload: students
});

export const adminLogin = async (adminCredential, navigation, dispatch) => {
  try {
    const { data } = await axios({
      method: 'Post',
      url: apiUrl + "/api/admin/login",
      data: adminCredential
    });
    console.log("login response", data);
    const { token } = data;
    const jwtToken = token.split(' ')[1];
    const key = 'secretHaiKisiKoBtanaMt';
    await SecureStore.setItemAsync('adminJwtToken', token);
    setAuthToken(token);
    const decoded = JWT.decode(jwtToken, key, { timeSkew: 100 });
    dispatch(setAdminUser(decoded));
    navigation.navigate('DrawerNavigator');
  } catch (err) {
    console.error('Login Error:', err);
    Alert.alert('Error', 'Invalid credentials. Please try again.');
  }
};

export const adminLogout = () => async (dispatch) => {
  try {
    await SecureStore.deleteItemAsync('adminJwtToken');
    setAuthToken(null);
    dispatch(setAdminUser({}));
  } catch (err) {
    console.error('Logout Error:', err);
  }
};

export const fetchStudent = () => async (dispatch) => {
  try {
    const token = await SecureStore.getItemAsync('adminJwtToken');
    if (!token) {
      throw new Error('No token found');
    }

    setAuthToken(token);

    const response = await axios.get(apiUrl + "/api/admin/getStudents", {
      headers: {
        Authorization: token
      }
    });

    const students = response.data.result;
    
    // Dispatch the action to set all students
    dispatch(setAllStudents(students));

    console.log("Number of students:", students.length); // Log the number of students

    return students; // Return the fetched students array
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};
