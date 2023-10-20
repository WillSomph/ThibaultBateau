import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Vue2 = ({ navigation }) => {

  const handlePress0 = () => {
    <button onClick={handlePress0}>Vue20</button>
    navigation.navigate('Vue20')
  }
  const handlePress1 = () => {
    <button onClick={handlePress1}>Vue21</button>
    navigation.navigate('Vue21')
  }
  const handlePress2 = () => {
    <button onClick={handlePress2}>Vue22</button>
    navigation.navigate('Vue22')
  }
  const handlePress3 = () => {
    <button onClick={handlePress3}>Vue23</button>
    navigation.navigate('Vue23')
  }
  const handlePress4 = () => {
    <button onClick={handlePress4}>Vue1</button> //page d'accueil
    navigation.navigate('Vue1')
  }
  const handlePress5 = () => {
    <button onClick={handlePress5}>Vue1</button>
    navigation.navigate('Vue1')
  }
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.title}>Nos Bateaux partenaires</Text>
      <View style={styles.container}>
<Text style={styles.textBold}>Toutes les eaux ménent à Thibault</Text>
<Text style={styles.text}>06.63.99.99.78~{"\n"}lebateaudethibault@gmail.com~{"\n"}www.facebook/lebateaudethibault</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress0}
          >
            <Image source={require('../assets/images/delaBrise_icon.png')} style={styles.image} />
            <Text style={styles.btn}>De la Brise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress1}
          >
            <Image source={require('../assets/images/Saphir_icon.png')} style={styles.image} />
            <Text style={styles.btn}>Saphir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress2}
          >
            <Image source={require('../assets/images/gastMicher_icon.png')} style={styles.image} />
            <Text style={styles.btn}>Gast Micher</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress3}
          >
            <Image source={require('../assets/images/Aquilon_icon.png')} style={styles.image} />
            <Text style={styles.btn}>Aquilon</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress4}
          >
            <Image source={require('../assets/images/ancre.png')} style={styles.image} />
            <Text style={styles.btn}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress5}
          >
            <Image source={require('../assets/images/ancre.png')} style={styles.image} />
            <Text style={styles.btn}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Vue2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontFamily:'Brush Script MT',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  centeredText: {
    fontSize: 15,
    textAlign: 'center', // Centrez le texte
    marginVertical: 0.5, // Ajoutez une marge verticale
  },
  textBold: {
    fontFamily:'Brush Script MT',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily:'Brush Script std',
  },
  btn: {
    padding: 10,
    color: 'white',
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row', // ajout des elements 1 par 1 en ligne
    justifyContent: 'space-between',
    marginVertical: 10, // Ajoutez une marge verticale entre les rangées de boutons

  },
  buttonContainer: {
    flexDirection: 'row',// elements 1 par 1 en ligne
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // shader des buttons
    borderRadius: 5, // Ajoutez des coins arrondis
    alignItems: 'center', // Centrez les éléments horizontalement
    justifyContent: 'center', // Centrez les éléments verticalement
    padding: 5, // Ajoutez un espace intérieur
    margin: 2,
  },
});
