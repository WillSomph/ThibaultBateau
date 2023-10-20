import { Pressable, StyleSheet, Text, ImageBackground, View, Image} from 'react-native';
import React from 'react';

const Vue41 = ({navigation}) => {

return (

    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/images/background.png')}
    >
    
    <View style={styles.containerImg}>

    <Text style={styles.title}>Noix de Saint - Jacques {'\n'} flambées au cognac</Text>

    <Image
        style={styles.imageAvant}
        resizeMode="cover"
        source={require('../assets/images/saintJacques.png')}
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
      justifyContent: 'center',
      padding: 5,
    },
    containerImg: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      padding: 5,
    },
    
    btn:{
      flexDirection:'row',// elements 1 par 1 en ligne
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.35)', // shader des buttons
      borderRadius: 5, // Ajoutez des coins arrondis
      alignItems: 'center', // Centrez les éléments horizontalement
      justifyContent: 'center', // Centrez les éléments verticalement
      padding: 5, // Ajoutez un espace intérieur
      margin:2,
    }, 
    imageBackground: {
        flex: 1, // Ensure the image fills the entire container
        width: '100%', // Set the width to 100% of the container
        height: '100%', // Set the height to 100% of the container
      },
      title: {
        fontFamily:'Brush Script MT',
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
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
      },
      viewButton:{
        flexDirection: 'row', // ajout des elements 1 par 1 en ligne
        justifyContent: 'space-between',
        marginVertical: 10, // Ajoutez une marge verticale entre les rangées de boutons
      },

})