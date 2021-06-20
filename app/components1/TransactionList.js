import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { heading } from "../config/Header";
import Transaction from "./Transaction";

export default function TransactionList({ transactions, deleteTransaction,isSelected1,isSelected2 }) {
  return (
    <View style={styles.container}>
      <Text style={[heading.h4, heading.subTitle]}>Your Savings And Payements</Text>
      {transactions.map((item) => {
        return (
          <Transaction
            key={item.id}
            item={item}
            deleteTransaction={deleteTransaction}
            isSelected1={isSelected1} isSelected2={isSelected2}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -5,
    marginBottom: 20,
  },
});