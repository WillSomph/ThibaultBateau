import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Vue0 from './screens/Vue0';
import Vue1 from './screens/Vue1';
import Vue2 from './screens/Vue2';
import Vue20 from './screens/Vue20';
import Vue21 from './screens/Vue21';
import Vue22 from './screens/Vue22';
import Vue23 from './screens/Vue23';
import Vue3 from './screens/Vue3';
import Vue30 from './screens/Vue30';
import Vue31 from './screens/Vue31';
import Vue32 from './screens/Vue32';
import Vue33 from './screens/Vue33';
import Vue4 from './screens/Vue4';
import Vue40 from './screens/Vue40';
import Vue41 from './screens/Vue41';
import Vue42 from './screens/Vue42';
import Vue43 from './screens/Vue43';

export default function App() {
  const backgroundImageSource = require('./assets/background.png');

    return (
      <NavigationContainer>
        <ImageBackground source={backgroundImageSource} style={styles.imageBackground}>
          <Stack.Navigator>
          <Stack.Screen name="Vue0" component={Vue0} />
          <Stack.Screen name="Vue1" component={Vue1} />
          <Stack.Screen name="Vue2" component={Vue2} />
          <Stack.Screen name="Vue20" component={Vue20} />
          <Stack.Screen name="Vue21" component={Vue21} />
          <Stack.Screen name="Vue22" component={Vue22} />
          <Stack.Screen name="Vue23" component={Vue23} />
          <Stack.Screen name="Vue3" component={Vue3} />
          <Stack.Screen name="Vue30" component={Vue30} />
          <Stack.Screen name="Vue31" component={Vue31} />
          <Stack.Screen name="Vue32" component={Vue32} />
          <Stack.Screen name="Vue33" component={Vue33} />
          <Stack.Screen name="Vue4" component={Vue4} />
          <Stack.Screen name="Vue40" component={Vue40} />
          <Stack.Screen name="Vue41" component={Vue41} />
          <Stack.Screen name="Vue42" component={Vue42} />
          <Stack.Screen name="Vue43" component={Vue43} />
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