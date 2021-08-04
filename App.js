import { StatusBar } from "expo-status-bar";
import React ,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AppButton from "./app/components/AppButton";
import LandingScreen from "./app/screens/LandingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import TabNavigator from "./app/navigation/TabNavigator";
import PayScanner from "./app/components/PayScanner";
import api from "./app/config/serverAPI";
import { LogBox  } from 'react-native';
import PayPage from "./app/screens/PayPage";
import test from "./app/screens/Transfer";
import transfer from "./app/screens/Transfer";



LogBox.ignoreLogs(["VirtualizedLists should never be nested inside plain ScrollViews with the same orientation"])

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen" >
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Welcome To FinBank" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen
      name="FinBank"
      component={TabNavigator}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Scan Product" component={PayScanner} />
      <Stack.Screen name="Pay By Transfer" component={transfer} />
      <Stack.Screen name="Payment" component={PayPage} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
