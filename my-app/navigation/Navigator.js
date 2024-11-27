import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { useMediaQuery } from 'react-responsive';

const Stack = createStackNavigator();

const Navigator = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerTitle: props => (
              <View style={isDesktop ? styles.desktopHeader : styles.mobileHeader}>
                <Image 
                  source={require('../assets/pneuspeedy-removebg-preview.png')}
                  style={isDesktop ? styles.desktopImage : styles.mobileImage}
                />
              </View>
            ) 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  desktopHeader: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  mobileHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  desktopImage: {
    width: 200,
    height: 80,
  },
  mobileImage: {
    width: 100,
    height: 40,
  },
});

export default Navigator;