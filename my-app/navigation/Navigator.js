import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PricingScreen from '../screens/PricingScreen';
import ContactScreen from '../screens/ContactScreen';
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
          options={({ navigation }) => ({ 
            headerTitle: props => (
              <View style={styles.headerContainer}>
                <Image 
                  source={require('../assets/pneuspeedy-removebg-preview.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
                <View style={styles.headerButtons}>
                  <TouchableOpacity onPress={() => navigation.navigate('Pricing')}>
                    <Text style={styles.headerButtonText}>PRICING</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <Text style={styles.headerButtonText}>CONTACT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {/* Add your action here */}}>
                    <Text style={styles.headerButtonText}>FR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen 
          name="Pricing" 
          component={PricingScreen} 
          options={{ title: 'Pricing' }}
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ title: 'Contact' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the content horizontally
    flex: 1,
  },
  logoImage: {
    width: 300,  // Fixed width
    height: 120, // Fixed height
    marginRight: 20, // Adjust space between the logo and buttons
  },
  desktopImage: {
    width: 200,
    height: 80,
    marginRight: 200, // Add some space between the logo and buttons
  },
  mobileImage: {
    width: 100,
    height: 40,
    marginRight: 50, // Add some space between the logo and buttons
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonText: {
    marginHorizontal: 50,
    fontSize: 20,
    color: 'blue', // Change this to your preferred color
  },
});

export default Navigator;