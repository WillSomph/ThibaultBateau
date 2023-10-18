import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, View } from 'react-native';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

import Vue0 from './screens/Vue0';
import Vue1 from './screens/Vue1';
import Vue2 from './screens/Vue2';
import Vue3 from './screens/Vue3';
import Vue4 from './screens/Vue4';
import Vue5 from './screens/Vue5';
import Vue50 from './screens/Vue50';
import Vue51 from './screens/Vue51';
import Vue52 from './screens/Vue52';
import Vue53 from './screens/Vue53';



export default function App() {
    const backgroundImageSource = require('./assets/images/background.png');

    return (
      <NavigationContainer>
        <ImageBackground source={backgroundImageSource} style={styles.imageBackground}>
          <Stack.Navigator>
          <Stack.Screen name="Vue0" component={Vue0} />
          <Stack.Screen name="Vue1" component={Vue1} />
          <Stack.Screen name="Vue2" component={Vue2} />
          <Stack.Screen name="Vue3" component={Vue3} />
          <Stack.Screen name="Vue4" component={Vue4} />
          <Stack.Screen name="Vue5" component={Vue5} />
          <Stack.Screen name="Vue50" component={Vue50} />
          <Stack.Screen name="Vue51" component={Vue51} />   
          <Stack.Screen name="Vue52" component={Vue52} />
          <Stack.Screen name="Vue53" component={Vue53} />   
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