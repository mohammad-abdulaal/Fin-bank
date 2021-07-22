import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

import { heading } from "../config/Header";
import Transaction from "./Transaction";

export default function TransactionList({ transactions, deleteTransaction,isSelected1,isSelected2 ,renderRightActions }) {
  return (
    <View style={styles.container}>
      <Text style={[heading.h4, heading.subTitle]}>Your Savings And Payments</Text>
      {transactions.map((item) => {
        return (
          <Transaction
            key={item.id}
            item={item}
            deleteTransaction={deleteTransaction}
            isSelected1={isSelected1} isSelected2={isSelected2}
            renderRightActions={() => <ListItemDeleteAction onPress={() => deleteTransaction(item.id)}/>}
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