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
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AppButton from "./app/components/AppButton";
import LandingScreen from "./app/screens/LandingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import TabNavigator from "./app/navigation/TabNavigator";
import PayScanner from "./app/components/PayScanner";
import api from "./app/config/serverAPI";

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
      <Stack.Screen name="PayScanner" component={PayScanner} />
    </Stack.Navigator>
    // <TabNavigator/>
  );
};
export default function App() {
  // const logout = async()=>{
  //   api.defaults.headers.common["Authorization"] =`Bearer ${
  //     JSON.parse(localStorage.getItem(""))
  //   }
  //   `
  // };
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
