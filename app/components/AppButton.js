import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

function AppButton({ title, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "95%",
    marginVertical: 10,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
