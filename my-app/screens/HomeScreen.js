import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, Dimensions } from 'react-native';
import tw from 'twrnc';
import { useMediaQuery } from 'react-responsive';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  return (
    <SafeAreaView style={tw`bg-red-100 h-full`}>
      <View style={isDesktop ? styles.desktopContainer : styles.mobileContainer}>
        <Image 
          style={styles.image}
          source={require('../assets/pneuspeedy-removebg-preview.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  desktopContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mobileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: width,
    height: width * 0.5,
    resizeMode: 'contain',
  },
});

export default HomeScreen;