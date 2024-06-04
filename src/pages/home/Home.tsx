import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Home Page</Text>
      <Text style={styles.greeting}>Hello Antoha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0047ab',
    padding: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0047ab',
    padding: 10,
  },
});
