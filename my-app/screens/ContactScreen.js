import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const ContactScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Contact Screen</Text>
    </SafeAreaView>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});