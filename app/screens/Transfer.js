import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View , CheckBox , StatusBar , Platform } from 'react-native';

//import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { ImageBackground } from 'react-native';
import * as Yup from "yup";
import { Image } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import HeaderTransfer from '../components/HeaderTransfer';
const Transfer = ({route, navigation}) => {
  const [User,setUser] = useState({
    name: "",
    value:""
  });

  const handleName = (textValue) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: textValue,
    }));
    if (textValue ===""){
      alert("Please Fill User")
    }
    console.log(User.name)
  };
  const handleAmount = (textValue) => {
    setUser((prevUser) => ({
      ...prevUser,
      value: textValue,
    }));
  }
  return (
    <SafeAreaView style={styles.container}>
        <HeaderTransfer/>
        <View style={styles.container}>
          {/* <Text style={styles.titleText}>
          Transfer Money
          </Text> */}
          <Text style={styles.headingText}>
          Fin Account Number
          </Text>
          <View>
            <AppTextInput
            placeholder=""
            onChangeText={handleName}
            value={User.name}
            style={styles.textinput}
            />
          </View>
          <Text style={styles.headingText}>
          Amount Transfer
          </Text>
          <View style={styles.hi4}>
            <AppTextInput
            placeholder=""
            onChangeText={handleAmount}
            value={User.value}
            style={styles.textinput}
            />
          </View>
          <AppButton
          title='Transfer'
          onPress={() => alert("Money Transfer Is Successfully Done")}
          />
        </View>

          <BackgroundImage
          source={require('../assets/61384-money-transaction.gif')}
          style={{  width: 280, height:150,marginLeft:30,marginTop:-10, flex: 0.75}}
          />

    </SafeAreaView>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  hi:{
    // backgroundColor:0,
    marginVertical:250,
    marginLeft:15
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // backgroundColor: "#f7f7f7",
  },
  container1:{
   borderRadius:20
  },
  currency:{
    // backgroundColor:0,
    overflow: 'visible',

  },
  titleText: {
    padding: 8,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical:30

  },
  headingText: {
    padding: 8,
    // textAlign:'center'
    marginVertical:-10,

    fontSize:15,
    fontWeight:'bold',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft:80,
    marginVertical:0,
    marginBottom:-1
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 5,
    marginVertical:6
  },
  hi4:{
    marginVertical:5,
    // padding:10,
    marginLeft:0
  }
});

{/* <View style={styles.checkboxContainer}>
          <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
          />
          <Text style={styles.label}>User</Text>
          <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
          />
          <Text style={styles.label}>Goverment Payments</Text>
          </View> */}