import React, { useState } from "react";
import { StyleSheet , View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../config/colors";
import { AntDesign } from '@expo/vector-icons';
export default function CurrencySelector({ onChange, onPress , props}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Riyal Qatar(QAR)" , value: "Riyal Qatar(QAR)" },
    { label: "Omani Riyal(OMR)", value: "Omani Riyal(OMR)" },
    { label: "Dirham Emirati(AED)", value: "Dirham Emirati(AED)" },
    { label: "Euro(€)", value: "Euro(€)" },

  ]);

  return (
    <View style={styles.view}>
    <DropDownPicker
      placeholder="Select Currency"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.selector}
      textStyle={styles.text}
      onChangeValue={onChange}
      onPress={onPress}
      searchable={false}
      textStyle={styles.text}
      listMode='SCROLLVIEW'
    />
    </View>


  );
}

const styles = StyleSheet.create({
  selector: {
    backgroundColor: colors.lightBlue,
    borderColor: "transparent",
    borderRadius: 30 ,
    height: 60,
    width:350,
    marginVertical: 6,
    marginLeft:-5
  },
  text:{
    flex:1,
    fontSize: 15,
    fontWeight:"bold",
    justifyContent:"center"
  },

  view:{
    marginHorizontal:10,
    marginVertical:-10,
    // paddingVertical:100
    paddingVertical:18
  }

});
