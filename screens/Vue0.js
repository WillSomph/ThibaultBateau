import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Vue0 = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Vue1");
  };
  const handlePress2 = () => {
    navigation.navigate("Vue2");
  };
  const handlePress3 = () => {
    navigation.navigate("Vue3");
  };
  const handlePress4 = () => {
    navigation.navigate("Vue4");
  };
  const handlePress5 = () => {
    navigation.navigate("Vue5");
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.text}>Le bateau de Thibault</Text>
      <View style={styles.container}>
        <Text style={styles.centeredText}>Vente en direct de notre bateau</Text>
        <Text style={styles.centeredText}>
          Produits selon la saison, Livraison sur Paris
        </Text>
        <Text style={styles.centeredText}>06.63.99.99.78</Text>
        <Text style={styles.centeredText}>lebateaudethibault@gmail.com</Text>
        <Text style={styles.centeredText}>
          www.facebook.com/lebateaudethibault
        </Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress5}
          >
            <Image
              source={require("../assets/images/poisson.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Produits et promotions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress2}
          >
            <Image
              source={require("../assets/images/ancre.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Bateaux</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress3}
          >
            <Image
              source={require("../assets/images/restaurant.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Restaurant</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress4}
          >
            <Image
              source={require("../assets/images/recette.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Recette</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress}
          >
            <Image
              source={require("../assets/images/tourteau.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Vue0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 5,
  },
  centeredText: {
    fontSize: 15,
    textAlign: "center", // Centrez le texte
    marginVertical: 0.5, // Ajoutez une marge verticale
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center", // Centrez le texte
    marginBottom: 10, // Ajoutez une marge inférieure pour l'espace supplémentaire
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
