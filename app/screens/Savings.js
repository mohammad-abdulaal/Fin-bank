import React, { useState , useEffect }  from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import uuid from "react-native-uuid";
import axios from 'axios';
import Header from "../components1/Header";
import Balance from "../components1/Balance";
import IncomeExpenses from "../components1/IncomeExpenses";
import TransactionList from "../components1/TransactionList";
import AddTransaction from "../components1/AddTransaction";

export default function App() {
  const [transactions, setTransactions] = useState([
    {
      id:null,
      amount: "",
      name: "transaction",
    },
  ]);
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.filter((transaction) => transaction.id !== id);
    });
  };

  const addTransaction = (e, transaction) => {
    e.preventDefault();

    setTransactions((prevTransactions) => {
      return [{ id: uuid.v1(), ...transaction }, ...prevTransactions];
    });
    console.log(transactions)
  };
  const [isSelected1, setSelection1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);


  const selectedIncomeCheckBox = (e) =>{
    setSelection2(true);
    setSelection1(false);
  }
  const selectedExpenseCheckBox = (e)=>{
    setSelection2(false);
    setSelection1(true);

  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.scrollView}>
          <Header />
          <View style={styles.bodyWrapper}>
            <IncomeExpenses transactions={transactions} />
            <AddTransaction
              addTransaction={addTransaction}
              isSelected1={isSelected1} isSelected2={isSelected2}
              setSelection1={selectedExpenseCheckBox} setSelection2={selectedIncomeCheckBox}
            />
            <TransactionList
              transactions={transactions}
              deleteTransaction={deleteTransaction}
              isSelected1={isSelected1} isSelected2={isSelected2}
              setSelection1={setSelection1} setSelection2={setSelection2}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollView: {},
  bodyWrapper: {
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    marginVertical:20
  },
});