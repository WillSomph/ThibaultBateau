import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue0 = ({navigation}) => {

    const handlePress = () => {
        <button onClick={handlePress}>Vue1</button>
        navigation.navigate('Vue1')
    }
    const handlePress2 = () => {
        <button onClick={handlePress2}>Vue2</button>
        navigation.navigate('Vue2')
    }
    const handlePress3 = () => {
        <button onClick={handlePress3}>Vue2</button>
        navigation.navigate('Vue3')
    }
    const handlePress4 = () => {
        <button onClick={handlePress4}>Vue2</button>
        navigation.navigate('Vue4')
    }
    const handlePress5 = () => {
        <button onClick={handlePress5}>Vue2</button>
        navigation.navigate('Vue5')
    }
return (
    <ImageBackground 
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover" 
>
        <View style={styles.container}>
        <Text style={styles.text}>Le bateau de Thibault</Text>

      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress}
      >
      <Text style={styles.btn}>Contact</Text>
      </Pressable>

      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress2}
      >
      <Text style={styles.btn}>Bateaux</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress3}
      >
      <Text style={styles.btn}>Restaurant</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress4}
      >
      <Text style={styles.btn}>Recettes</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress5}
      >
      <Text style={styles.btn}>Produits et promotions</Text>
      </Pressable>
      
      
    </View>
    </ImageBackground >
  )


}
export default Vue0;

const styles = StyleSheet.create({
    container: {

        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'blue',
    }, 
    btn:{
        padding: 10,
        color: 'white',
        borderRadius: 10,
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 30,
        margin: 10,
        transitionDuration: 0.4,
    }, 
    imageBackground: {
        flex: 1, // Ensure the image fills the entire container
        width: '100%', // Set the width to 100% of the container
        height: '100%', // Set the height to 100% of the container
      },
})