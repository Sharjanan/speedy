import { StyleSheet, Text, View , SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';

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
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  image: {
    width: 100,  // Specify the width of the image
    height: 100, // Specify the height of the image
    resizeMode: 'contain', // Makes sure the image fits within the specified dimensions
  },
})