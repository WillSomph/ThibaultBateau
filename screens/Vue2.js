import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue2 = ({navigation}) => {

    const handlePress0 = () => {
        <button onClick={handlePress0}>Vue20</button>
        navigation.navigate('Vue20')
    }
    const handlePress1 = () => {
        <button onClick={handlePress1}>Vue21</button>
        navigation.navigate('Vue21')
    }
    const handlePress2 = () => {
      <button onClick={handlePress2}>Vue22</button>
      navigation.navigate('Vue22')
  }
    const handlePress3 = () => {
        <button onClick={handlePress3}>Vue23</button>
        navigation.navigate('Vue23')
    }
    const handlePress4 = () => {
      <button onClick={handlePress4}>Vue1</button> //page d'accueil
      navigation.navigate('Vue1')
  }
  const handlePress5 = () => {
    <button onClick={handlePress5}>Vue1</button>
    navigation.navigate('Vue1')
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
      <Text style={styles.btn}>De la Brise</Text>
      </Pressable>

      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress1}
      >
      <Text style={styles.btn}>Saphir</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress2}
      >
      <Text style={styles.btn}>Gast Micher</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress3}
      >
      <Text style={styles.btn}>Aquillon</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress4}
      >
      <Text style={styles.btn}>Contact</Text>
      </Pressable>
      <Pressable
      style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
      onPress={handlePress5}
      >
      <Text style={styles.btn}>Contact</Text>
      </Pressable>
    </View>
    </ImageBackground >
  )


}
export default Vue2;

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
        flex: 1, // img qui prend tout l'ecran
        width: '100%',
        height: '100%', 
      },
})