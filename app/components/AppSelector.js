import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../config/colors";
import {
  Text,
} from "react-native";
export default function AppSelector({ onChange, onPress }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Beirut", value: "Beirut" },
    { label: "South", value: "South" },
    { label: "North Lebanon", value: "North Lebanon" },
    { label: "Beqaa", value: "Beqaa" },
    { label: "Mount Lebanon", value: "Mount Lebanon" },
    { label: "Baalbek-Hermel", value: "Baalbek-Hermel" },
  ]);

  return (

      <DropDownPicker
      placeholder="Select your governorate"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.slector}
      textStyle={styles.text}
      onChangeValue={onChange}
      onPress={onPress}
      searchable={false}
    />
    // <Text> hi </Text>
  );
}

const styles = StyleSheet.create({
  slector: {
    backgroundColor: colors.lightBlue,
    borderColor: "transparent",
    borderRadius: 20,
    height: 60,
    marginVertical: 10,
    position:"relative"
  },
  text: {
    fontSize: 17,
  },
});
