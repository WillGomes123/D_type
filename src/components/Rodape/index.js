import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Rodape = ({titulo}) => {
  return (
    <LinearGradient start={ { x: 1, y: 0 }} colors={['#fff','#A2D4FF']} style={styles.container}>
      <Text style={styles.text}>© 2024 Todos os direitos reservados</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  text: {
    color: '#888',
    fontSize: 12,
  },
});

export default Rodape;