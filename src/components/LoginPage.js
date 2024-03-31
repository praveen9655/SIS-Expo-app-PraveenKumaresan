//LoginPage
// LoginPage component
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { adminLogin } from '../actions/adminActions'; // Import adminLogin action
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); // Get dispatch function from Redux
  const navigation = useNavigation(); // Get navigation object

  const handleLogin = (e) => {
    e.preventDefault();
    adminLogin({ registrationNumber, password }, navigation,dispatch);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        onChangeText={text => setRegistrationNumber(text)}
        value={registrationNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
