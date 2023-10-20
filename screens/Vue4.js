import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Vue4 = ({navigation}) => {

  const handlePress0 = () => {
      <button onClick={handlePress0}>Vue40</button>
      navigation.navigate('Vue40')
  }
  const handlePress1 = () => {
      <button onClick={handlePress1}>Vue41</button>
      navigation.navigate('Vue41')
  }
  const handlePress2 = () => {
    <button onClick={handlePress2}>Vue42</button>
    navigation.navigate('Vue42')
}
  const handlePress3 = () => {
      <button onClick={handlePress3}>Vue43</button>
      navigation.navigate('Vue43')
  }
  const handlePress4 = () => {
    <button onClick={handlePress3}>Vue44</button>
    navigation.navigate('Vue44')
}

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.title}>Nos recettes</Text>
      <View style={styles.container}>
      <Text style={styles.textBold}>Toutes les recettes du bateau de Thibault</Text>
    <Text style={styles.text}>06.63.99.99.78~{"\n"}lebateaudethibault@gmail.com~{"\n"}www.facebook/lebateaudethibault</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress0}
          >
            <Image source={require('../assets/images/homardRecette_icon.png')} style={styles.image} />
            <Text style={styles.btn}>Homard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress1}
          >
            <Image source={require('../assets/images/saintJacques_icon.png')} style={styles.image} />
            <Text style={styles.btn}>St Jacques</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress2}
          >
            <Image source={require('../assets/images/barRecette_icon.png')} style={styles.image} />
            <Text style={styles.btn}>Bar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress3}
          >
            <Image source={require('../assets/images/poulpe.png')} style={styles.image} />
            <Text style={styles.btn}>Tourteau</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress4}
          >
            <Image source={require('../assets/images/poulpe.png')} style={styles.image} />
            <Text style={styles.btn}>Recette</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress4}
          >
            <Image source={require('../assets/images/poulpe.png')} style={styles.image} />
            <Text style={styles.btn}>Recette</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Vue4;

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
