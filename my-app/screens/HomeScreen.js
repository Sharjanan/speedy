import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import tw from 'twrnc';

// Get the width of the screen
const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-100 h-full`}>
      <View>
        <Image 
          style={styles.image}
          source={require('../assets/pneuspeedy-removebg-preview.png')}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width * 0.5,
    resizeMode: 'contain',
  },
});