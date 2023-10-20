import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, View } from 'react-native';
import { StyleSheet } from 'react-native';

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
import Vue20 from './screens/Vue20';
import Vue21 from './screens/Vue21';
import Vue22 from './screens/Vue22';
import Vue23 from './screens/Vue23';
import Vue30 from './screens/Vue30';
import Vue31 from './screens/Vue31';
import Vue32 from './screens/Vue32';
import Vue33 from './screens/Vue33';
import Vue34 from './screens/Vue34';
import Vue40 from './screens/Vue40';
import Vue41 from './screens/Vue41';
import Vue42 from './screens/Vue42';
import Vue43 from './screens/Vue43';
import Vue44 from './screens/Vue44';

const Stack = createStackNavigator();


export default function App() {
    const backgroundImageSource = require('./assets/images/background.png');

    return (
      <NavigationContainer>
        <ImageBackground source={backgroundImageSource} style={styles.imageBackground}>
          <Stack.Navigator screenOptions ={{ gestureEnabled: true, gestureDirection: 'horizontal'}}>
          <Stack.Screen name="Vue0" component={Vue0}/>      
          <Stack.Screen name="Vue1" component={Vue1} />   
          <Stack.Screen name="Vue2" component={Vue2} />   
          <Stack.Screen name="Vue3" component={Vue3} />   
          <Stack.Screen name="Vue4" component={Vue4} />
          <Stack.Screen name="Vue5" component={Vue5} />
          <Stack.Screen name="Vue50" component={Vue50} />
          <Stack.Screen name="Vue51" component={Vue51} />   
          <Stack.Screen name="Vue52" component={Vue52} />
          <Stack.Screen name="Vue53" component={Vue53} />
          <Stack.Screen name="Vue20" component={Vue20} />      
          <Stack.Screen name="Vue21" component={Vue21} />
          <Stack.Screen name="Vue22" component={Vue22} />   
          <Stack.Screen name="Vue23" component={Vue23} /> 
          <Stack.Screen name="Vue30" component={Vue30} />      
          <Stack.Screen name="Vue31" component={Vue31} />
          <Stack.Screen name="Vue32" component={Vue32} />   
          <Stack.Screen name="Vue33" component={Vue33} />
          <Stack.Screen name="Vue34" component={Vue34} />
          <Stack.Screen name="Vue40" component={Vue40} />      
          <Stack.Screen name="Vue41" component={Vue41} />
          <Stack.Screen name="Vue42" component={Vue42} />   
          <Stack.Screen name="Vue43" component={Vue43} />
          <Stack.Screen name="Vue44" component={Vue44} />     
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