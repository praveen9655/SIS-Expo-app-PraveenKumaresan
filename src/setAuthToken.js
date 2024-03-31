import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const setAuthToken = async (token) => {
    if (token) {
        // Set token to SecureStore
        await SecureStore.setItemAsync('adminJwtToken', token);
        // Apply token to every request
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // Remove token from SecureStore and axios headers
        await SecureStore.deleteItemAsync('adminJwtToken'); // Use SecureStore.deleteItemAsync
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;
