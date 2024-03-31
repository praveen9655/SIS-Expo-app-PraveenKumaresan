import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../Loading.svg')} style={styles.loadingImage} />
        <Image source={require('../ARJ.png')} style={styles.logoImage} />
      </View>
      <Text style={styles.loadingText}>Fetching Data...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
  logoImage: {
    position: 'absolute',
    width: 110,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Loading;
