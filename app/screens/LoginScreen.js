import React , {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import {instance} from "../config/serverAPI"
import AsyncStorage from '@react-native-async-storage/async-storage';
const loginInitialValues = {
  email: "",
  password: "",
};


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

export default function LoginScreen({navigation},props) {
  return (
    <ImageBackground
      source={require("../assets/login-page-assests/login-background.jpg")}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
          source={require('../assets/finbank_logo.png')}
          style={{ width: 400, height: 400 }}
          />
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={loginInitialValues}
            onSubmit={(values) => {axios.post('http://localhost:8000/api/login',values)
            .then((res)=>{
              if(res.status == 200){
                // const storeData = async (res) => {
                //   try {
                //     await AsyncStorage.setItem('token', res.data.token)
                //   } catch (e) {
                //     // saving error
                //   }
                // }
                localStorage.setItem('token',res.data.token)
                navigation.navigate('FinBank')
              }
            })
          }}
            validationSchema={validationSchema}

          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldTouched,
              touched,
              values,
              errors,
            }) => (
              <>
                <View style={styles.buttons}>
                  <AppTextInput
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder="Email"
                  icon="email"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={() => setFieldTouched("email")}
                  />
                  {errors.email && touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                  )}
                  <AppTextInput
                  onChangeText={handleChange("password")}
                  placeholder="Password"
                  icon="lock"
                  secureTextEntry
                  value={values.password}
                  onBlur={() => setFieldTouched("password")}
                  />
                  {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>)}
                  <View style={styles.buttons1}>
                    <AppButton
                    title="Sign In"
                    // style={{ width:'70%' }}
                    onPress={(values) => {
                        handleSubmit(values);
                      }}
                    // onPress={() =>navigation.navigate("FinBank")}
                    />
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
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
  buttons:{
    justifyContent:'center',
    marginLeft:20
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color:"#fff"
  },
  error: {
    color: "red",
    fontSize: 15,
    marginHorizontal: 10,
  },
  form: {
    display: "flex",
    width: "95%",
    justifyContent: "flex-start",
  },
  logo:{
    marginLeft:-60,
    marginVertical:-135,
    marginTop:-190
  }
});
