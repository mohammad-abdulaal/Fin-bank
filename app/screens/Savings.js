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
      name: "hi",
    },
  ]);

  useEffect(() => {
    axios.post('http://localhost:8000/api/wallet',{
              headers: {
                  'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiY2JiOTNkN2E0Mjg5NmY4YzRlZDQxNDk1N2VhZjI0ZWI3NDhlZDZmNDQ5NjA3NTg1ODFhMGI0ZDNjMGIxYWI3NTE5YmUwOWRkZDliM2YyMDgiLCJpYXQiOjE2MjM5NjE5NjgsIm5iZiI6MTYyMzk2MTk2OCwiZXhwIjoxNjU1NDk3OTY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LFNHXLNYsxnfmZ5KTQDrWUx9jpuYLcf_uK7wuQP5FbxsNcJHcIOkrZrhmaSjeXV3V-ZvmhExTg5IecORkzZ6rYPsaJnhaTNew7QWG2AmcN1FXocQZbgZxwbyTjmMpDcRstZNFN6jTPCrRe7sgdy3vMgVu9deHG9T5tK5FPIUNV7U7CYAktoWi9KdwabZFSeyEz3lMXbuH-poO7trPvMGomELyQNM9qmfYdx2rYR-650vqxNs-V5Bsk97C_KjV5Z8XbC0YnhQqnaooVK0Wfrzu_pW8Aru0GmG1DPFe3LyzGD9ctkIMaiQG_-90LNT__9EuQFB6xYxTfu_EnodADy80Dxr4d-4XQha1ueqiMmOSmBg-dWJKVLRDr0ucN29XKbLd5IQ-XmtBD7n-LbJcS4Be6Isg-3hRjKuu--86ffvEaihpRjNbSY4gjHDFD5nzDGQy2t0g5-OBT7JSAzcwKhurlmletBLDAHOvhBDr0Ho2xdOzrq9kVpBitu-7OtG6kCk4Hb91FI1hdv8WaDMnnG4TSwvxnFmje1nLoYkhuvam8fKbX-wLFWke-ZR7mv5k2v7marGwskH1EykIRE07-NZqKE8MNVJ2ZS5-WL3YK5u-EkNMY5LuT-KNwgG_ITvJQ90QxWcOoRPoKk-bLbwXX5PIqRucWdUtVZLoPAyFzATOlM'
              }
          })
    .then((res)=>{
      console.log(res.data)
    }
    )
  })


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
    axios.post('http://localhost:8000/api/wallet',
      transaction.data



      // headers: {
      //   'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiY2JiOTNkN2E0Mjg5NmY4YzRlZDQxNDk1N2VhZjI0ZWI3NDhlZDZmNDQ5NjA3NTg1ODFhMGI0ZDNjMGIxYWI3NTE5YmUwOWRkZDliM2YyMDgiLCJpYXQiOjE2MjM5NjE5NjgsIm5iZiI6MTYyMzk2MTk2OCwiZXhwIjoxNjU1NDk3OTY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LFNHXLNYsxnfmZ5KTQDrWUx9jpuYLcf_uK7wuQP5FbxsNcJHcIOkrZrhmaSjeXV3V-ZvmhExTg5IecORkzZ6rYPsaJnhaTNew7QWG2AmcN1FXocQZbgZxwbyTjmMpDcRstZNFN6jTPCrRe7sgdy3vMgVu9deHG9T5tK5FPIUNV7U7CYAktoWi9KdwabZFSeyEz3lMXbuH-poO7trPvMGomELyQNM9qmfYdx2rYR-650vqxNs-V5Bsk97C_KjV5Z8XbC0YnhQqnaooVK0Wfrzu_pW8Aru0GmG1DPFe3LyzGD9ctkIMaiQG_-90LNT__9EuQFB6xYxTfu_EnodADy80Dxr4d-4XQha1ueqiMmOSmBg-dWJKVLRDr0ucN29XKbLd5IQ-XmtBD7n-LbJcS4Be6Isg-3hRjKuu--86ffvEaihpRjNbSY4gjHDFD5nzDGQy2t0g5-OBT7JSAzcwKhurlmletBLDAHOvhBDr0Ho2xdOzrq9kVpBitu-7OtG6kCk4Hb91FI1hdv8WaDMnnG4TSwvxnFmje1nLoYkhuvam8fKbX-wLFWke-ZR7mv5k2v7marGwskH1EykIRE07-NZqKE8MNVJ2ZS5-WL3YK5u-EkNMY5LuT-KNwgG_ITvJQ90QxWcOoRPoKk-bLbwXX5PIqRucWdUtVZLoPAyFzATOlM'
      // }
    )
    .then((res)=>{
      console.log(res.data)
      console.log('hi')
    })
    .catch(error => {
      console.log('Something went wrong!', error);
      console.log('hi')
    });
  };
  const [isSelected1, setSelection1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);



  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.scrollView}>
          <Header />
          <View style={styles.bodyWrapper}>
            {/* <Balance transactions={transactions} /> */}
            <IncomeExpenses transactions={transactions} />
            <AddTransaction
              addTransaction={addTransaction}
              isSelected1={isSelected1} isSelected2={isSelected2}
              setSelection1={setSelection1} setSelection2={setSelection2}
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