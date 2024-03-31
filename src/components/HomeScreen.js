import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; // Importing useDispatch
import { useNavigation } from '@react-navigation/native';
import { adminLogout } from '../actions/adminActions'; // Assuming you have a logout action creator

const adminSelector = state => state.admin;

const AdminHome = () => {
  const admin = useSelector(adminSelector);
  const dispatch = useDispatch(); // Initializing useDispatch
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(adminLogout()); // Dispatching the logout action
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {admin.isAuthenticated ? (
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Admin Profile</Text>
          </View>
          <View style={styles.profileContainer}>
            <Image source={{ uri: admin.admin.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{admin.admin.name}</Text>
            <View style={styles.contactContainer}>
              <Text style={styles.contactText}>{admin.admin.email}</Text>
              {admin.admin.contactNumber && (
                <Text style={styles.contactText}>Contact: {admin.admin.contactNumber}</Text>
              )}
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{admin.admin.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{admin.admin.email}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Registration Number:</Text>
              <Text style={styles.value}>{admin.admin.registrationNumber}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Joining Year:</Text>
              <Text style={styles.value}>{admin.admin.joiningYear}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Position:</Text>
              <Text style={styles.value}>{admin.admin.department}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        navigation.navigate('Login')
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactContainer: {
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
  },
  detailsContainer: {
    flex: 1,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AdminHome;