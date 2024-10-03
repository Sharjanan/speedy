import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import React from 'react';
import tw from 'twrnc';

// Get the width of the screen
const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-100 h-full`}>
      <View>
        <Image 
          style={styles.image}  // Add style here
          source={require('../assets/pneuspeedy-removebg-preview.png')}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: width,  // Full screen width
    height: width * 0.5,  // Maintain a specific aspect ratio (e.g., 50% of the width)
    resizeMode: 'contain',  // Scale the image to fit within the width while maintaining aspect ratio
  },
});
