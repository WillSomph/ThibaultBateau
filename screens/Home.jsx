import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Vue5 from "./Produits";

const buttonList = [
  {
    icon: require("../assets/images/poisson.png"),
    text: "Produits et promotions",
    path: "Produits",
  },
  {
    icon: require("../assets/images/ancre.png"),
    text: "Restaurants",
    path: "Restaurants"
  },
  {
    icon: require("../assets/images/restaurant.png"),
    text: "Bateaux",
    path: "Bateaux",
  },
  {
    icon: require("../assets/images/recette.png"),
    text: "Recettes",
    path: "Recettes",
  },
  {
    icon: require("../assets/images/tourteau.png"),
    text: "Contact",
    path: "Contact",
  }
]

const Home = (props) => {

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.title}>Le bateau de Thibault</Text>
      <View style={styles.container}>
        <Text style={styles.textBold}>Vente en direct de notre bateau{"\n"}Produit selon la saison, Livraisons sur Paris</Text>
        <Text style={styles.text}>06.63.99.99.78~{"\n"}lebateaudethibault@gmail.com~{"\n"}www.facebook/lebateaudethibault</Text>
        <View style={styles.row}>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => { props.navigation.navigate(buttonList[0].path) }}
          >
            <Image
              source={buttonList[0].icon}
              style={styles.image}
            />
            <Text style={styles.btn}>{buttonList[0].text}</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          {buttonList.slice(1, 3).map((item, index) => (
            <Pressable
              key={index}
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate(item.path) }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.btn}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.row}>
          {buttonList.slice(3, 5).map((item, index) => (
            <Pressable
              key={index}
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate(item.path) }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.btn}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 5,
  },
  centeredText: {
    fontSize: 15,
    textAlign: "center", // Centrez le texte
    marginVertical: 0.5, // Ajoutez une marge verticale
  },
  title: {
    fontFamily: 'Brush Script MT',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  textBold: {
    fontFamily: 'Brush Script MT',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    padding: 10,
    color: "white",
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Brush Script std',
  },
  row: {
    flexDirection: "row", // ajout des elements 1 par 1 en ligne
    justifyContent: "space-between",
    marginVertical: 10, // Ajoutez une marge verticale entre les rangées de boutons
  },
  buttonContainer: {
    flexDirection: "row", // elements 1 par 1 en ligne
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)", // shader des buttons
    borderRadius: 5, // Ajoutez des coins arrondis
    alignItems: "center", // Centrez les éléments horizontalement
    justifyContent: "center", // Centrez les éléments verticalement
    padding: 5, // Ajoutez un espace intérieur
    margin: 2,
  },
});
