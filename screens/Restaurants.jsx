import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const buttonList = [
  {
    icon: require('../assets/images/desGascons_icon.png'),
    text: "Bistrot des Gascons",
    path: "SingleRestaurant",
  },
  {
    icon: require('../assets/images/fousDeLile_icon.png'),
    text: "Les fous de l'île",
    path: "SingleRestaurant",

  },
  {
    icon: require('../assets/images/bistrotLandais_icon.png'),
    text: "Bistrot Landais",
    path: "SingleRestaurant",

  },
  {
    icon: require('../assets/images/duSommelier_icon.png'),
    text: "Bistrot du Sommelier",
    path: "SingleRestaurant",

  },
  {
    icon: require('../assets/images/villa9Trois.png'),
    text: "Villa 9-Trois",
    path: "SingleRestaurant",
  },
  {
    icon: require('../assets/images/ancre.png'),
    text: "Devenir Partenaire",
    path: 'Contact',
  },
]
const Restaurants = (props) => {

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.title}>Restaurants partenaires</Text>
      <View style={styles.container}>
        <Text style={styles.textBold}>Toutes les restaurants partenaires avec le bateau de Thibault</Text>
        <Text style={styles.text}>06.63.99.99.78~{"\n"}lebateaudethibault@gmail.com~{"\n"}www.facebook/lebateaudethibault</Text>

        <View style={styles.row}>
          {buttonList.slice(0, 2).map((item, index) => (
            <Pressable
              key={index}
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate(item.path, { data: item }) }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.txt}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.row}>
          {buttonList.slice(2, 4).map((item, index) => (
            <Pressable
              key={index}
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate(item.path, { data: item }) }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.txt}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.row}>
          {buttonList.slice(4, 6).map((item, index) => (
            <Pressable
              key={index}
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate(item.path, { data: item }) }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.txt}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};
export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontFamily: 'Brush Script MT',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Brush Script std',
  },
  textBold: {
    fontFamily: 'Brush Script MT',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt: {
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
