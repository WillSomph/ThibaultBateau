import { Pressable, StyleSheet, Text, ImageBackground, View, Image } from 'react-native';
import React from 'react';

const SingleRecette = (props) => {
  let recettes = props.route.params.data;

  return (

    <ImageBackground
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/images/background.png')}
    >

      <View style={styles.containerImg}>

        <Text style={styles.title}>{recettes.text}</Text>

        <Image
          style={styles.imageAvant}
          resizeMode="contain"
          source={recettes.icon}
        />

        <Text style={styles.textBold}>{recettes.paragraphe}</Text>

      </View>

    </ImageBackground>
  )
}
export default SingleRecette;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  containerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  btn: {
    flexDirection: 'row',// elements 1 par 1 en ligne
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // shader des buttons
    borderRadius: 5, // Ajoutez des coins arrondis
    alignItems: 'center', // Centrez les éléments horizontalement
    justifyContent: 'center', // Centrez les éléments verticalement
    padding: 5, // Ajoutez un espace intérieur
    margin: 2,
  },
  imageBackground: {
    flex: 1, // Ensure the image fills the entire container
    width: '100%', // Set the width to 100% of the container
    height: '100%', // Set the height to 100% of the container
  },
  title: {
    fontFamily: 'Brush Script MT',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  imageAvant: {
    justifyContent: 'center',
    width: '55%',
    height: '35%',
  },

  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Brush Script std',
  },
  textBold: {
    fontFamily: 'Brush Script MT',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textButton: {
    fontFamily: 'Brush Script std',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  viewButton: {
    flexDirection: 'row', // ajout des elements 1 par 1 en ligne
    justifyContent: 'space-between',
    marginVertical: 10, // Ajoutez une marge verticale entre les rangées de boutons
  },

})