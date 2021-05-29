import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import StepperSingup from "../components/StepperSingup";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppSelector from "../components/AppSelector";
import IdVerification from "../components/IdVerification";

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
  const [imageUri, setImageUri] = useState();

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
    Account: Yup.string().required().label("Account Balance"),
    phonenumber: Yup.string()
      .matches(/[0-9]{8}/, "Phone number must be 8 digits")
      .label("Phone number"),
  });

  const handleSetIdImage = (image) => {
    setImageUri(image);
  };

  const renderStepContent = () => {
    if (step === 0)
      return (
        <Formik
          initialValues={formInitialValue}
          onSubmit={(values, formikBag) => {
            console.log(values);
            handleNextButton();
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
            <ScrollView>
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
                icon="phone"
                onChangeText={handleChange("phonenumber")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("phonenumber")}
                keyboardType="numeric"
              />
              {touched.phonenumber && errors.phonenumber && (
                <Text style={styles.error}>{errors.phonenumber}</Text>
              )}
              <AppTextInput
                placeholder="Account Balance in US Dollars"
                icon="bank"
                onChangeText={handleChange("Account")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("Account")}
                keyboardType="numeric"
              />
              {touched.account && errors.acount && (
                <Text style={styles.error}>{errors.account}</Text>
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
                      if (Object.keys(errors).length === 0) return;
                      handleNextButton();
                      handleSubmit(values);
                    }}
                    style={{ width: "40%" }}
                  />
                </View>
              )}
            </ScrollView>
          )}
        </Formik>
      );
    if (step === 1)
      return (
        <>
          <View
            style={{
              marginVertical: imageUri ? "20%" : "60%",
              alignSelf: "center",
            }}
          >
            {!imageUri ? (
              <IdVerification handleSetIdImage={handleSetIdImage} />
            ) : (
              <Image
                source={{ uri: imageUri }}
                style={{ width: 300, height: 300 }}
              />
            )}
          </View>
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
              }}
              style={{ width: "40%" }}
            />
            <AppButton
              title="Next"
              onPress={(values) => {
                if (imageUri) handleNextButton();
                return;
                // handleSubmit(values);
              }}
              style={{ width: "40%" }}
            />
          </View>
        </>
      );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.stepperContainer}>
        <StepperSingup stepperArray={stepper} currentStep={step} />
        <View style={styles.stepperConnector} />
      </View>
      <View style={styles.form}>{renderStepContent()}</View>
    </ScrollView>
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
    height: 400,
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
