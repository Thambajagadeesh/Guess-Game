// File: screens/ResultScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ setStep }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎉 Game Over!</Text>
      <Button title="Play Again" onPress={() => setStep(1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
