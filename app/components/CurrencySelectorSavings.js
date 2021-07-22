import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet , View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../config/colors";
import {
  Text,
} from "react-native";
export default function AmountSelector({ onChange, onPress }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "United State Dollars ($)", value: "500"  },
    { label: "Euro (€)", value: "€" },
    { label: "Riyal Qatar (QAR)", value: "QAR"},
    { label: "United Arab Emirates Dirham (AED)", value:"AED"  },
    { label: "Omani Riyal (OMR)", value:"OMR"  },
    // { label: "200$", value: 200  },
  ]);

  return (
    <View style={styles.View}>
      <DropDownPicker
      placeholder="Select Currency"
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
    </View>
    // <Text> hi </Text>
  );
}

const styles = StyleSheet.create({
  slector: {
    backgroundColor: colors.lightBlue,
    borderColor: "transparent",
    borderRadius: 25,
    height: 60,
    marginVertical: 10,
    position:"relative",
    width:320
  },
  text: {
    fontSize: 17,
  },
  View: {
      marginHorizontal:-1,
      marginVertical:-18,
      // paddingVertical:100
      paddingVertical:18

  }
});
