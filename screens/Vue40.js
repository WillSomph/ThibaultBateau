import { Pressable, StyleSheet, Text, ImageBackground, View, Image} from 'react-native';
import React from 'react';

const Vue40 = ({navigation}) => {

return (

    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/background.png')}
    >
    
    <View style={styles.container}>

    <Text style={styles.title}>Homard en chaud-froid</Text>

    <Image
        style={styles.imageAvant}
        resizeMode="cover"
        source={require('../assets/homardRecette.png')}
    />

    <Text style={styles.textBold}>Faites cuire les homards dans de l'eau bouillante avec du thym, du laurier, du sel et du poivre de Cayenne.Laissez {"\n"}
    cuire 20 minutes.Egouttez-les et laissez-les refroidir.</Text>
    
    <Text style={styles.textBold}>Découppez les coffres des homards dans le sens de la logueur.</Text>
    
    <Text style={styles.textBold}>Mélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée</Text>

    </View>
    
    </ImageBackground>
    
    
  )
}
export default Vue40;

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