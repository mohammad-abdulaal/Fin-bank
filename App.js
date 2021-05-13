import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import AppButton from "./app/components/AppButton";
import LandingScreen from "./app/screens/LandingScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({});
