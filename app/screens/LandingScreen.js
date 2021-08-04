import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import AppButton from "../components/AppButton";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FinBank</Text>

      <ImageBackground
        source={require("../assets/landing-page-assets/financial-services.gif")}
        style={styles.imageBackground}
      >
        <AppButton
          title="Login"
          style={styles.loginButton}
          onPress={() => navigation.navigate("Welcome To FinBank")}
        />
        <AppButton
          title="Register"
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
          // onPress={() => alert("hello")}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  loginButton:{
    backgroundColor: "black",
    marginVertical:-30
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
    marginVertical:50
  },
  text: {
    position: "relative",
    alignSelf: "center",
    top: "30%",
    fontWeight: "bold",
    fontSize: 40,
  },
});
