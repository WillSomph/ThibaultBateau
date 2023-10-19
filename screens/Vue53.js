import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Vue53() {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>ERROR 404</Text>
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
    fontWeight: "bold", // txt en gras
    textAlign: "center",
  },
});
