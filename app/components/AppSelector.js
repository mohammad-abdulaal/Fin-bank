import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../config/colors";

export default function AppSelector({ onChange, onPress }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Beirut", value: "Beirut" },
    { label: "South", value: "South" },
    { label: "North", value: "North" },
    { label: "Bekaa", value: "Bekaa" },
    { label: "Jbeil", value: "Jbeil" },
  ]);

  return (

      <DropDownPicker
      placeholder="Select your location"
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
  );
}

const styles = StyleSheet.create({
  slector: {
    backgroundColor: colors.lightBlue,
    borderColor: "transparent",
    borderRadius: 20,
    height: 60,
    marginVertical: 10,
  },
  text: {
    fontSize: 17,
  },
});
