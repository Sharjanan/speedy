import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { useMediaQuery } from 'react-responsive';

const Stack = createStackNavigator();

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              headerTitle: props => (
                <Image 
                  source={require('./assets/pneuspeedy-removebg-preview.png')}
                  //style={isDesktop ? styles.desktopImage : styles.mobileImage}
                />
              ) 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  desktopImage: {
    width: 200,
    height: 80,
  },
  mobileImage: {
    width: 100,
    height: 40,
  },
});

export default App;