import { Pressable, StyleSheet, Text, ImageBackground, View, Image} from 'react-native';
import React from 'react';

const Vue34 = ({navigation}) => {

return (

    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/background.png')}
    >
    
    <View style={styles.container}>

    <Text style={styles.title}>Bistrot du Sommelier</Text>

    <Image
        style={styles.imageAvant}
        resizeMode="cover"
        source={require('../assets/duSommelier@3x.png')}
    />
    <Text style={styles.textBold}>XXX YYY ZZZ{"\n"}</Text>

    <Text style={styles.textBold}>
    Qu'il est chaud le soleil{"\n"}
    Quand nous sommes en vacances{"\n"}
    Y a d'la joie, des hirondelles{"\n"}
    C'est le sud de la France{"\n"}
    Papa bricole au garage{"\n"}
    Maman lit dans la chaise longue{"\n"}
    Dans ce joli paysage{"\n"}
    Moi, je me balade en tongs{"\n"}
    {"\n"}
    Que de bonheur!{"\n"}
    Que de bonheur!{"\n"}
    </Text>

    </View>
    
    </ImageBackground>
  )
}
export default Vue34;

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