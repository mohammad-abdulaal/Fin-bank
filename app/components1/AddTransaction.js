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

export default function TransactionList({ addTransaction,isSelected1,isSelected2,setSelection1,setSelection2 }) {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: "",
  });

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
  console.log(transaction.amount)
  let item="av";
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
        {/* <AppTextInput
         placeholder="Enter Name..."
         onChangeText={handleNameChange}
         value={transaction.name}/>
        <AppTextInput
        placeholder="Enter Amount..."
        keyboardType="numeric"
        onChangeText={handleAmountChange}
        value=
        {transaction.amount} */}

      {isSelected2 ?
      <View>
         <AppTextInput
         placeholder="Enter Name..."
         onChangeText={handleNameChange}
         value={transaction.name}/>
         <AppTextInput
         placeholder="Enter Amount..."
         keyboardType="numeric"
         onChangeText={handleAmountChange}
         value={transaction.amount} />
      </View>
      :
      <View>
        <AppTextInput
         placeholder="Enter Name..."
         onChangeText={handleNameChange}
         value={transaction.name}/>
        <AppTextInput
        placeholder="Enter Amount"
        keyboardType="numeric"
        onChangeText={handleAmountChange}
        value={transaction.amount}
      />
      </View>
       }
      <AppButton
      onPress={(e)=>{
          clearForm();
          addTransaction(e,transaction);
      }}
      title="Add transaction"
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
    marginBottom: 20,
    marginLeft:60,
    marginVertical:0,
    marginBottom:-1
  },
  label: {
    margin: 5,
    marginVertical:6
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
  },
});