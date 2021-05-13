import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AppButton title="hello" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
