import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, View } from 'react-native';
import { StyleSheet } from 'react-native';

import Home from './screens/Home';
import Contact from './screens/Contact';
import Bateaux from './screens/Bateaux';
import Restaurants from './screens/Restaurants';
import Recettes from './screens/Recettes';
import Produits from './screens/Produits';
import ErrorPage from './screens/ErrorPage';
import SingleBateau from './screens/SingleBateau';
import SingleRecette from './screens/SingleRecette';

import SingleRestaurant from './screens/SingleRestaurant';


const Stack = createStackNavigator();


export default function App() {
  const backgroundImageSource = require('./assets/images/background.png');

  return (
    <NavigationContainer>
      <ImageBackground source={backgroundImageSource} style={styles.imageBackground}>
        <Stack.Navigator screenOptions={{ gestureEnabled: true, gestureDirection: 'horizontal' }} initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Produits" component={Produits} />
          <Stack.Screen name="ErrorPage" component={ErrorPage} />
          <Stack.Screen name="Restaurants" component={Restaurants} />
          <Stack.Screen name="SingleRestaurant" component={SingleRestaurant} />
          <Stack.Screen name="Bateaux" component={Bateaux} />
          <Stack.Screen name="SingleBateau" component={SingleBateau} />
          <Stack.Screen name="Recettes" component={Recettes} />
          <Stack.Screen name="SingleRecette" component={SingleRecette} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});