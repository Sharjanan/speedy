import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import tw from 'twrnc';

// Get the width of the screen
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.container, tw`bg-red-100`]}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={require('../assets/pneuspeedy-removebg-preview.png')}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',  // Use percentage-based width
    height: undefined,
    aspectRatio: 2,  // Maintain aspect ratio
  },
});