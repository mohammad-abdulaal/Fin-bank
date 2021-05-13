import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require("../assets/login-page-assests/login-background.jpg")}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <AppButton title="Start" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : "",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
  },
});
