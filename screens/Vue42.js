import { Pressable, StyleSheet, Text, ImageBackground, View, Image} from 'react-native';
import React from 'react';

const Vue42 = ({navigation}) => {

return (

    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/background.png')}
    >
    
    <View style={styles.container}>

    <Text style={styles.title}>Bar rôti au laurier frais</Text>

    <Image
        style={styles.imageAvant}
        resizeMode="cover"
        source={require('../assets/barRecette.png')}
    />

    <Text style={styles.textBold}>
        Sur une plaque ou plat allant au four, disposer quelques feuilles de laurier frais, verser un filet d'huile d'olive et du gros sel.{'\n'}
        Disposer le bar, puis l'arroser d'un filet d'huile d'olive et mettre un peu de gros sel sur la peau.{'\n'}
        {'\n'}
        Cuire au for pendant 12 min à 240°C.
    </Text>

    </View>
    
    </ImageBackground>
    
    
  )
}
export default Vue42;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        backgroundColor: 'red',
        width: '100%',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }, 
    imageBackground: {
        flex: 1, // Ensure the image fills the entire container
        width: '100%', // Set the width to 100% of the container // Set the width to 100% of the container
        height: '100%', // Set the height to 100% of the container
      },
      title: {
        fontFamily:'Brush Script MT',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
      },
      imageAvant: {
        width: '70%',
        height: '40%',
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontFamily:'Brush Script std',
      },
      textBold: {
        fontFamily:'Brush Script MT',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      textButton: {
        fontFamily:'Brush Script std',
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
      viewButton:{
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        justifyContent: 'center',
      },

})