import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  CheckBox
} from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import axios from 'axios';
import { heading } from "../config/Header";
import AmountSelector from "../components/CurrencySelectorSavings";

export default function TransactionList({ addTransaction,isSelected1,isSelected2,setSelection1,setSelection2 }) {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: "",
  });
  let sign="";
  const handleNameChange = (textValue) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      name: textValue,
    }));
  };

  const handleAmountChange = (textValue) => {
    if(isSelected2){
      let value = textValue.replace("-","");
      setTransaction((prevTransaction) => ({
        ...prevTransaction,
        amount: `-${value}`,
      }));
      return;
    }
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      amount: textValue,
    }));
  };

  const clearForm = () => {
    setTransaction({ name: "", amount: "" });
  };
  const onCurrencySelectorChange = (value,index) =>{

    console.log(value)
  }
  return (
    <View style={styles.box}>
      <Text style={[heading.h4, heading.subTitle]}>Add New Transaction</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Income</Text>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Expense</Text>
      </View>
      {isSelected2 ?
      <View>
         <AppTextInput
         placeholder="Enter Name"
         onChangeText={handleNameChange}
         value={transaction.name}
        //  style={{ width:320 }}
         />
         {/* <AmountSelector
         onChange={onCurrencySelectorChange}
         /> */}
         <AppTextInput
         placeholder="Enter Amount"
         keyboardType="numeric"
         onChangeText={handleAmountChange}
         value={transaction.amount}
        //  style={{ width:320 }}
         />
      </View>
      :
      <View>
        <AppTextInput
         placeholder="Enter Name"
         onChangeText={handleNameChange}
         value={transaction.name}
        //  style={{ width:320 }}
         />
         {/* <AmountSelector
          onChange={onCurrencySelectorChange}
         /> */}
         <AppTextInput
         placeholder="Enter Amount"
         keyboardType="numeric"
         onChangeText={handleAmountChange}
         value={transaction.amount}
        //  style={{ width:320 }}
         />
      </View>
       }
      <AppButton
      onPress={(e)=>{
          clearForm();
          addTransaction(e,transaction);
          onCurrencySelectorChange(e,sign)
      }}
      title="Add transaction"
      // style={{ marginLeft:8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
box:{
    marginVertical:20
},
input: {
    borderRadius: 2,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  mtb: {
    marginTop: 10,
    marginBottom: 5,
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#9c88ff",
    padding: 9,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:-5
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 150,
    marginLeft:60,
    marginVertical:0,
    marginBottom:-1,

  },
  label: {
    margin: 1,
    marginVertical:1,
    marginTop:6
  },
  checkboxContainer2: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  label2: {
    margin: 5,
    marginVertical:6
  },
  checkbox: {
    alignSelf: "center",
    // margin:10

  },
});