import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function ErrorPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>ERROR 404</Text>
      <Pressable
        style={styles.customButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Retour à la page précédente</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  customButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
