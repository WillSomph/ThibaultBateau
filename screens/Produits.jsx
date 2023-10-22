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
    icon: require("../assets/images/poulpe.png"),
    text: "Poissons",
  },
  {
    icon: require("../assets/images/poulpe.png"),
    text: "Coquillages",
  },
  {
    icon: require("../assets/images/poulpe.png"),
    text: "Crustacés",
    path: ""
  },
  {
    icon: require("../assets/images/poulpe.png"),
    text: "Promotions",
    path: ""
  },
]

const Produits = (props) => {

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {buttonList.map((item, index) => (
          <View style={styles.row} key={index}>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate('ErrorPage') }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.btn}>{item.text}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

export default Produits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 5,
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
  row: {
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
    padding: "10%",
    margin: 2,
  },
});
