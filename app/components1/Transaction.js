import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert , CheckBox } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
import { numberWithCommas } from "../utils/Format";
import colors from "../config/colors";
import Swipeable from 'react-native-gesture-handler/Swipeable';
export default function TransactionList({ item, deleteTransaction ,  isSelected1 ,isSelected2 ,renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
      style={[styles.listItem, +item.amount < 0 ? styles.minus : styles.plus]}>
      <View style={styles.listItemView}>
        <TouchableOpacity style={styles.viewWrapper}>
          <Text
          style={[styles.ml, styles.color]}>{item.name}</Text>
        </TouchableOpacity>
        <Text style={styles.color}>
          {" "}
          {isSelected1 && item.amount<0 ? "-" :"" }

          ${numberWithCommas(Math.abs(+item.amount).toFixed(2))}
        </Text>
      </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "white",
    justifyContent: "space-between",
    position: "relative",
    padding: 15,
    marginTop: 10,
  },
  viewWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ml: {
    marginLeft: 5,
  },
  color: {
    color: "#333",
  },
  plus: {
    borderRightColor:"green",
    borderRightWidth: 5,
  },
  minus: {
    borderRightColor: "red",
    borderRightWidth: 5,
  },
});