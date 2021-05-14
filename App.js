import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";

import AppButton from "./app/components/AppButton";
import LandingScreen from "./app/screens/LandingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";

export default function App() {
  return <SignUpScreen />;
}

const styles = StyleSheet.create({});
