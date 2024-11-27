import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const PricingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pricing Screen</Text>
    </SafeAreaView>
  );
}

export default PricingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});