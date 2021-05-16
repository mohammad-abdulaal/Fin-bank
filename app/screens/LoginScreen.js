import React from "react";
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

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

const loginInitialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

export default function LoginScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/login-page-assests/login-background.jpg")}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.text}>FinBank</Text>
        <View style={styles.form}>
          <Formik
            initialValues={loginInitialValues}
            onSubmit={(values) => console.log(values)}
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
                  <Text style={styles.error}>{errors.password}</Text>
                )}
                <AppButton
                  title="Sign In"
                  onPress={(values) => {
                    handleSubmit(values);
                  }}
                />
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
  text: {
    fontSize: 30,
    fontWeight: "bold",
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
});
