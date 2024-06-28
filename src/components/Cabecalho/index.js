import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cabecalho = ({ titulo }) => {
  return (
    <LinearGradient start={ { x: 1, y: 0 }} colors={['#fff', '#A2D4FF']} style={styles.container}>
      <Text style={styles.text}>{titulo}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cabecalho;