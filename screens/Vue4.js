import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue4 = ({navigation}) => {

    const handlePress0 = () => {
        <button onClick={handlePress0}>Vue40</button>
        navigation.navigate('Vue40')
    }
    const handlePress1 = () => {
        <button onClick={handlePress1}>Vue41</button>
        navigation.navigate('Vue41')
    }
    const handlePress2 = () => {
      <button onClick={handlePress2}>Vue42</button>
      navigation.navigate('Vue42')
  }
    const handlePress3 = () => {
        <button onClick={handlePress3}>Vue43</button>
        navigation.navigate('Vue43')
    }
    const handlePress4 = () => {
      <button onClick={handlePress3}>Vue44</button>
      navigation.navigate('Vue44')
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
      onPress={handlePress0}
      >
      <Text style={styles.btn}>Hommard</Text>
      </Pressable>

      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress1}
      >
      <Text style={styles.btn}>St Jacques</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress2}
      >
      <Text style={styles.btn}>Bar</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress3}
      >
      <Text style={styles.btn}>Tourteau</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress4}
      >
      <Text style={styles.btn}>Recette</Text>
      </Pressable>
    </View>
    </ImageBackground >
  )


}
export default Vue4;

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