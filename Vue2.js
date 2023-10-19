import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue2 = ({navigation}) => {

return (

    <ImageBackground 
      style={styles.image} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
      source={require('../assets/background.png')}
    >
    
    <View style={styles.container}>

    <Text style={styles.title}>Nos Bateaux partenaires</Text>

    <Text style={styles.textBold}>Toutes les eaux ménent à Thibault</Text>
    <Text style={styles.text}>06.63.99.99.78~{"\n"}lebateaudethibault@gmail.com~{"\n"}www.facebook/lebateaudethibault</Text>

    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue10')}>
      <View style={styles.btn}> <Text style={styles.textButton}>De la Brise</Text> </View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Vue11')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Saphir</Text> </View>
      </Pressable>
    </View>

    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue12')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Gast Micher</Text></View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Vue13')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Aquilon</Text></View>
      </Pressable>

    </View>
    <View style={styles.viewButton}>
      <Pressable onPress={()=>navigation.navigate('Vue14')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Contact</Text></View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Vue14')}>
      <View style={styles.btn}> <Text style={styles.textButton}>Contact</Text></View>
      </Pressable>
    </View>

    </View>
    
    </ImageBackground>
    
    
  )
}
export default Vue2;

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