import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Vue5 = ({navigation}) => {

  const handlePress0 = () => {
      <button onClick={handlePress0}>Vue50</button>
      navigation.navigate('Vue50')
  }
  const handlePress1 = () => {
      <button onClick={handlePress1}>Vue51</button>
      navigation.navigate('Vue51')
  }
  const handlePress2 = () => {
    <button onClick={handlePress2}>Vue52</button>
    navigation.navigate('Vue52')
}
  const handlePress3 = () => {
      <button onClick={handlePress3}>Vue52</button>
      navigation.navigate('Vue53')
  }

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress0}
          >
            <Image
              source={require("../assets/images/poulpe.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Poissons</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress1}
          >
            <Image
              source={require("../assets/images/poulpe.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Coquillages</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress2}
          >
            <Image
              source={require("../assets/images/poulpe.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Crustacés</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePress3}
          >
            <Image
              source={require("../assets/images/poulpe.png")}
              style={styles.image}
            />
            <Text style={styles.btn}>Promotions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Vue5;

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
