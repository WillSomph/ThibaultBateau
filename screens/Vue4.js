import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue4 = ({navigation}) => {

return (

    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/background.png')}
    >
    
    <View style={styles.container}>

    <Text style={styles.title}>Nos recettes</Text>

    <Text style={styles.textBold}>Toutes les recettes du bateau de Thibault</Text>
    <Text style={styles.text}>06.63.99.99.78~{"\n"}lebateaudethibault@gmail.com~{"\n"}www.facebook/lebateaudethibault</Text>

    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue40')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Homard</Text> </View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Vue41')}>
      <View style={styles.btn}> <Text style={styles.textButton}>St Jacques</Text> </View>
      </Pressable>
    </View>

    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue42')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Bar</Text></View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Vue43')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Recette</Text></View>
      </Pressable>
    </View>

    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue43')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Recette</Text></View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Vue43')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Recette</Text></View>
      </Pressable>
    </View>

    </View>
    
    </ImageBackground>
    
    
  )
}
export default Vue4;

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