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
import { FontAwesome } from '@expo/vector-icons';
import StepperSingup from "../components/StepperSingup";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppSelector from "../components/AppSelector";
import IdVerification from "../components/IdVerification";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import AppTextInput1 from "../components/AppTextInput1";
import axios from 'axios';
const stepper = ["Information", "ID Verification","Approved"];
const formInitialValue = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  location: "",
  passport_picture:"",
  Fin_number:"0000",
  account_balance:200,
  is_approved:0
};

export default function SignUpScreen({navigation}) {
  const [step, setStep] = useState(0);
  const [imageUri, setImageUri] = useState();
  formInitialValue.passport_picture=imageUri;
  const handleNextButton = () => {
    if (step > 2) return;
    setStep(step + 1);
    if (step===1){
      axios.post("http://localhost:8000/api/signup",formInitialValue)
    }
  };

  const handleBackButton = () => {
    if (step == 0) return;
    setStep(step - 1);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    location: Yup.string().required().label("Location"),
    first_name: Yup.string().required().label("First name"),
    last_name: Yup.string().required().label("Last name"),

    // Account: Yup.string().required().label("Account Balance"),
    phone_number: Yup.string()
      .matches(/[0-9]{8}/, "Phone number must be 8 digits")
      .label("Phone number"),
  });
  const [nextDisabled,setNextDisabled]=useState(true)
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
            formInitialValue.email=values.email;
            formInitialValue.password=values.password;
            formInitialValue.location=values.location;
            formInitialValue.first_name=values.first_name;
            formInitialValue.last_name=values.last_name;
            formInitialValue.phone_number=values.phone_number;

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
                onChangeText={handleChange("first_name")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("first_name")}
              />
              {touched.first_name && errors.first_name && (
                <Text style={styles.error}>{errors.first_name}</Text>
              )}
              <AppTextInput
                placeholder="Last Name"
                icon="account"
                onChangeText={handleChange("last_name")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("last_name")}
              />
              {touched.last_name && errors.last_name && (
                <Text style={styles.error}>{errors.last_name}</Text>
              )}
              <AppTextInput
                placeholder="Phone Number"
                icon="phone"
                onChangeText={handleChange("phone_number")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("phone_number")}
                keyboardType="numeric"
              />
              {touched.phone_number && errors.phone_number && (
                <Text style={styles.error}>{errors.phone_number}</Text>
              )}
              {/* <AppTextInput
                placeholder="Account Balance in US Dollars"
                icon="bank"
                onChangeText={handleChange("Account")}
                style={{ width: "100%" }}
                onBlur={() => setFieldTouched("Account")}
                keyboardType="numeric"
              /> */}
              {/* {touched.account && errors.acount && (
                <Text style={styles.error}>{errors.account}</Text>
              )} */}
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
            </>
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
                style={{ width: 350, height: 350 }}
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
              onPress={() => {
                setTimeout(()=>{
                  setNextDisabled(false)
                  handleNextButton()
                }, 2500)
                if (imageUri) handleNextButton();
                return ;
                // handleSubmit(values);
              }}
              style={{ width: "40%" }}
            />
          </View>
        </>
      );
      if (step === 2)
      return (
        <>
          {/* <ImageBackground
          source={require('../assets/animation_500_kpzapyyu.gif')}
          style={{ width: 500, height: 500,flex:1,marginLeft:-100}}
          > */}
          <View style={styles.Intro1}>
            <View style={styles.Intro}>
              <Text style={styles.text}>Your form has been sent to admin</Text>
            </View>
            <View
            style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginRight:-40
            }}>
              {nextDisabled==false?(<AppButton
              title="Next"
              onPress={() => {
                if (imageUri) handleNextButton();
                return ;
                // handleSubmit(values);
              }}
              style={{ width: "40%" }}
              />):null
              }

            </View>
          </View>
          {/* </ImageBackground> */}
        </>
      );
      if (step === 3)
      return (
        <>
          <ImageBackground
          source={require('../assets/animation_500_kpzapyyu.gif')}
          style={{ width: 500, height: 500,flex:1,marginLeft:-100}}
          >
            <View style={styles.Intro}>
              <Text style={styles.text}>Thank you for choosing us!</Text>
            </View>
            <View
            style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginRight:-40
            }}>
              <AppButton
              title="Let's Go"
              onPress={() => {
                navigation.navigate('FinBank')
                // handleSubmit(values);
              }}
              style={{ width: "40%" }}
              />
            </View>
          </ImageBackground>
        </>
      )

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
  Intro:{
    marginVertical:20
  },
  Intro1:{
    marginVertical:150,
    marginLeft:-30
  },
  text: {
    position: "relative",
    alignSelf: "center",
    top: "30%",
    fontWeight: "bold",
    fontSize: 20,
    marginRight:-40
  },
  Headingtext:{
    marginLeft:15
  }
});
