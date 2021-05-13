import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import AppButton from "../components/AppButton";

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FinBank</Text>
      <ImageBackground
        source={require("../assets/landing-page-assets/financial-services.gif")}
        style={styles.imageBackground}
      >
        <AppButton title="login" style={styles.loginButton} />
        <AppButton title="register" style={styles.registerButton} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  registerButton: {
    backgroundColor: "gray",
  },
  text: {
    position: "relative",
    alignSelf: "center",
    top: "30%",
    fontWeight: "bold",
    fontSize: 40,
  },
});
