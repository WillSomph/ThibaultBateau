import { Pressable, StyleSheet, Text, ImageBackground, View, Image} from 'react-native';
import React from 'react';

const Vue41 = ({navigation}) => {

return (

    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/background.png')}
    >
    
    <View style={styles.container}>

    <Text style={styles.title}>Noix de Saint - Jacques {'\n'} flambées au cognac</Text>

    <Image
        style={styles.imageAvant}
        resizeMode="cover"
        source={require('../assets/saintJacques.png')}
    />

    <Text style={styles.textBold}>
        Faire fondre du beurre avec des échalotes puis ajouter les noix de Saint-Jacques. Les faires revenir en laissant le millieu translucide puis les retirer du feu.{'\n'}
        {'\n'}
        Ajouter l'ail et le persil dans la poêle et laisser cuire quelques secondes. Bien faire chauffer la poêle, puis flamber au cognac. Une fois la flamme éteinte, ajouter les noix de Saint-Jaques (il ne faut pas les flamber car elles perdraient leur saveur).{'\n'}
        {'\n'}
        Déguster chaud nature ou accompagé d'une fondue de poireaux.
    </Text>

    </View>
    
    </ImageBackground>
    
    
  )
}
export default Vue41;

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