import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue5 = ({navigation}) => {

return (
    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/background.png')}
    >

    <View style={styles.container}>
      
    <Text style={styles.textBold}>Choissisez vos produits</Text>

      <Pressable style={styles.btn} onPress={()=>navigation.navigate('Vue5')}>
      <View> <Text style={styles.textButton}>Poissons</Text> </View>
      </Pressable>

      <Pressable style={styles.btn} onPress={()=>navigation.navigate('Vue5')}>
      <View> <Text style={styles.textButton}>Coquillages</Text> </View>
      </Pressable>

      <Pressable style={styles.btn} onPress={()=>navigation.navigate('Vue5')}>
      <View> <Text style={styles.textButton}>Crustacés</Text> </View>
      </Pressable>

      <Pressable style={styles.btn} onPress={()=>navigation.navigate('Vue5')}>
      <View> <Text style={styles.textButton}>Promotions</Text> </View>
      </Pressable>

    </View>
    </ImageBackground >
  )
}
export default Vue5;

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
      alignItems: 'center',
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
        color: 'black',
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