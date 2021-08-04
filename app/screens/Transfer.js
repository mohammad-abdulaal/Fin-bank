import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View , CheckBox, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { ImageBackground } from 'react-native';
import * as Yup from "yup";
import { Image } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import axios from 'axios';

const transfer = ({route, navigation}) => {
  const initialValue = {
    number : "",
    value: ""
  }
  const [User,setUser] = useState(initialValue);
  const [modalActive, setModalActive] = useState(false);
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('token')
  //     if(value !== null) {
  //      alert(value)
  //     }
  //     else{
  //         console.log("hi")
  //     }
  //   } catch(e) {
  //     // error reading value
  //   }

  // }
  let token=localStorage.getItem("token")

  const handleNumber = (textValue) => {
    setUser((prevUser) => ({
      ...prevUser,
      number: textValue,
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
  useEffect(() => {
    console.log("testing params",route)
    setUser((prevUser)=>({
      ...prevUser,
      value:route.params.amountToPay
    }))

  },[]);
  const handleTransferButton = ()=>{
    setModalActive(true)
    setTimeout(()=>{
      setModalActive(false)
       Alert.alert("Congratulation","Money Transfered!",
       [
      { text: "OK", onPress: () =>  navigation.navigate("FinBank")},
       ]
       );
    },5000)
    let account=User.number,
    balance=User.value;
  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };

  const bodyParameters = {
    account: account,
    balance: balance
  };

  axios.post(
    'http://localhost:8000/api/transfer',
    bodyParameters,
    config
  ).then(console.log).catch(console.log);

  }
  console.log("value",User.value)
  return (

      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.headingText}>
          Transfer To:
          </Text>
          <View>
            <AppTextInput
            placeholder="FinBank Account Number"
            onChangeText={handleNumber}
            value={User.name}
            style={styles.textinput}
            />
          </View>
          <Text style={styles.headingText}>
          Transfer Amount ($):
          </Text>
          <View style={styles.handleAmount}>
            <AppTextInput
            placeholder=""
            onChangeText={handleAmount}
            value={User.value}
            style={styles.textinput}
            />
          </View>
          <AppButton
          title='Transfer'
          onPress={handleTransferButton}
          />

        </View>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalActive}
        onRequestClose={() => {
          console.warn("closed");
        }}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.75)'}}>
            <BackgroundImage
             source={require('../assets/61384-money-transaction.gif')}
             style={{  width: 280, height:150,marginTop:300, flex: 1}}
            />
          </View>
        </Modal>

      </SafeAreaView>
  );
};

export default transfer;

const styles = StyleSheet.create({
  hi:{
    marginVertical:250,
    marginLeft:15
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,

  },
  container1:{
   borderRadius:20
  },
  currency:{
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
    marginVertical:-10,
    fontSize:15,
    fontWeight:'bold'
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
  handleAmount:{
    marginVertical:5,
    marginLeft:0
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  text: {
    fontSize:15,
    fontWeight:'bold',
  }
});
