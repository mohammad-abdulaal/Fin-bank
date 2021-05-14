import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import StepperSingup from "../components/StepperSingup";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppSelector from "../components/AppSelector";

const stepper = ["Information", "ID Verification", "Finished"];
const formInitialValue = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phonenumber: "",
  location: "",
};

export default function SignUpScreen() {
  const [step, setStep] = useState(0);

  const handleNextButton = () => {
    if (step > 2) return;
    setStep(step + 1);
  };

  const handleBackButton = () => {
    if (step == 0) return;
    setStep(step - 1);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    location: Yup.string().required().label("Location"),
    firstName: Yup.string().required().label("First name"),
    lastName: Yup.string().required().label("Last name"),
    phonenumber: Yup.string()
      .matches(/[0-9]{8}/, "Phone number must be 8 digits")
      .label("Phone number"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.backToHomeContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => {}}>
          <MaterialIcons name="arrow-back" size={25} color="#000" />
        </TouchableOpacity>
        <View style={styles.centerElement}>
          <Text style={styles.homeText}>Home</Text>
        </View>
      </View>
      <View style={styles.stepperContainer}>
        <StepperSingup stepperArray={stepper} currentStep={step} />
        <View style={styles.stepperConnector} />
      </View>
      <View style={styles.form}>
        <Formik
          initialValues={formInitialValue}
          onSubmit={(values) => {
            console.log(values);
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
              <AppTextInput
                placeholder="Email"
                icon="email"
                onChangeText={handleChange("email")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <AppTextInput
                placeholder="Password"
                icon="lock"
                onChangeText={handleChange("password")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("password")}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <AppTextInput
                placeholder="First Name"
                icon="account"
                onChangeText={handleChange("firstName")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("firstName")}
              />
              {touched.firstName && errors.firstName && (
                <Text style={styles.error}>{errors.firstName}</Text>
              )}
              <AppTextInput
                placeholder="Last Name"
                icon="account"
                onChangeText={handleChange("lastName")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("lastName")}
              />
              {touched.lastName && errors.lastName && (
                <Text style={styles.error}>{errors.lastName}</Text>
              )}
              <AppTextInput
                placeholder="Phone Number"
                icon="account"
                onChangeText={handleChange("phonenumber")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("phonenumber")}
                keyboardType="numeric"
              />
              {touched.phonenumber && errors.phonenumber && (
                <Text style={styles.error}>{errors.phonenumber}</Text>
              )}

              <AppSelector
                onChange={handleChange("location")}
                onPress={() => setFieldTouched("location")}
              />
              {touched.location && errors.location && (
                <Text style={styles.error}>{errors.location}</Text>
              )}
              {step <= 0 ? (
                <AppButton
                  title="Next"
                  onPress={(values) => {
                    handleNextButton();
                    handleSubmit(values);
                  }}
                />
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <AppButton
                    title="Back"
                    onPress={(values) => {
                      handleBackButton();
                      handleSubmit(values);
                    }}
                    style={{ width: "40%" }}
                  />
                  <AppButton
                    title="Next"
                    onPress={(values) => {
                      console.log(errors);
                      if (!errors) console.log("yaaaay");
                      handleNextButton();
                      handleSubmit(values);
                    }}
                    style={{ width: "40%" }}
                  />
                </View>
              )}
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backToHomeContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  backButton: {
    marginRight: "2%",
  },
  centerElement: { justifyContent: "center", alignItems: "center", height: 50 },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f6f6f6",
  },
  error: {
    color: "red",
  },
  homeText: { fontSize: 18, color: "#000" },
  stepperContainer: {
    padding: 10,
    backgroundColor: "#72bcd4",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
  },
  stepperConnector: {
    height: 3,
    backgroundColor: colors.lightBlue,
    width: 220,
    position: "absolute",
    top: 23,
    zIndex: 10,
  },
  form: {
    padding: 10,
  },
});
