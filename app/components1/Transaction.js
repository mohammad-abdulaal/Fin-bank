import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert , CheckBox } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { numberWithCommas } from "../utils/Format";
import colors from "../config/colors";

export default function TransactionList({ item, deleteTransaction ,  isSelected1 ,isSelected2 }) {

  // {props.isselected1? "+ {item.amount}" : props.isselected2: "- {item.amount}" }
  // {isSelected2? "-"}
  // let sign = +item.amount < 0 ? expense : income ;
  // isSelected1? "+" : "";
  // isSelected2? "-" : "";
  // let sign = +item.amount < 0 ? "-" : "+" ;
  return (
    <TouchableOpacity
      style={[styles.listItem, +item.amount < 0 ? styles.minus : styles.plus]}
    >
      <View style={styles.listItemView}>
        <TouchableOpacity style={styles.viewWrapper}
         onPress={() =>
          Alert.alert(
            "Delete Transaction",
            "Are you sure you want to delete this transaction?",
            [
              { text: "Yes", onPress: () => deleteTransaction(item.id) },
              { text: "No" },
            ]
          )
        }
        >
          <Text
          style={[styles.ml, styles.color]}>{item.name}</Text>
        </TouchableOpacity>
        <Text style={styles.color}>
          {" "}
          {isSelected1 && item.amount<0 ? "-" :"" }
           {/* {isSelected1? "+" : ""}
          {isSelected2? "-" : ""} */}
          {numberWithCommas(Math.abs(+item.amount).toFixed(2))}

        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "white",
    justifyContent: "space-between",
    position: "relative",
    padding: 10,
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
    borderRightColor:colors.lightBlue,
    borderRightWidth: 5,
  },
  minus: {
    borderRightColor: "black",
    borderRightWidth: 5,
  },
});