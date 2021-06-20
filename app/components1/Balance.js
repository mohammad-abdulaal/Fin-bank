import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { heading } from "../config/Header";
import { numberWithCommas } from "../utils/Format";

export default function Balance({ transactions , balance }) {
  // let balance = 0;
  transactions.map((transaction) => (balance += +transaction.amount ));
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
  balance: {
    fontSize: 25,
  },
});