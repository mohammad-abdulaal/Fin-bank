import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderTransfer() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Payement</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignSelf: "stretch",
    padding: 15,
    width:390,
    backgroundColor: "black",
    marginLeft:-5,
    marginVertical:32
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
    marginLeft:-15
  },
});