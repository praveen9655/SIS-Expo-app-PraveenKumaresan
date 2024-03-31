import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { fetchStudent } from '../actions/adminActions';

export default function StudentControl() {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const fetchedStudents = await dispatch(fetchStudent());
        setStudents(fetchedStudents);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudentsData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {students.map((student, index) => (
        <View key={index} style={styles.studentContainer}>
          <Image
            source={{ uri: student.avatar }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{student.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'left',
    paddingVertical: 10,
  },
  studentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
  },
});
