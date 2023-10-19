import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue0 = ({navigation}) => {

return (
    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/background.png')}
    >
        
    <View style={styles.container}>
    <Text style={styles.title}>Le bateau de Thibault</Text>

    <Text style={styles.textBold}>Vente en direct de notre bateau{"\n"}Produit selon la saison, Livraisons sur Paris</Text>
    <Text style={styles.text}>06.63.99.99.78~{"\n"}lebateaudethibault@gmail.com~{"\n"}www.facebook/lebateaudethibault</Text>

    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue5')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Produit et promotions</Text> </View>
      </Pressable>
    </View>

    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue2')}>
      <View style={styles.btn}>  <Text style={styles.textButton}>Bateaux</Text></View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Vue3')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Restaurants</Text></View>
      </Pressable>
    </View>
    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue4')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Recettes</Text></View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Vue1')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Contact</Text></View>
      </Pressable>
    </View>
    
    </View>
    </ImageBackground >
  )
}
export default Vue0;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        backgroundColor: 'grey',
        width: '100%',
        margin: 5,
        padding: 15,
        borderRadius: 10,
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
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        justifyContent: 'center',
      },

})