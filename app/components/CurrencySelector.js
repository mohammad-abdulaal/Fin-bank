import React, { useState } from "react";
import { StyleSheet , View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function CurrencySelector({ onChange, onPress , props}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "United States Dollar", value: "United States Dollar" },
    // { label: "EURO ", value: "EURO " },
    { label: "LEBANESE LIRA ", value: "LEBANESE LIRA" },

  ]);

  return (
    <View style={styles.view}>
      <DropDownPicker
      placeholder="Select Currency "
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.selector}
      textStyle={styles.text}
      onChangeValue={onChange} // change value inside it
      onPress={onPress}        //
      searchable={false}
      textStyle={styles.text}
      listMode='SCROLLVIEW'
      // containerStyle={{ width:"100%"  }}
      // listMode='DEFAULT'
      // modalProps={{ animationType: 'slide', width: "20%", height: '10%'}}
      // modalContentContainerStyle={{backgroundColor: "#fff", width:'50%', height:'50%'}}
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
    marginVertical: 5,
    marginLeft:-5
      // marginHorizontal:10,
      // marginRight:20,
      // justifyContent: "center",
      // flex: 1,
      // alignItems: "center",
      // position: 'absolute',
      // zIndex:5

  },
  text:{
    flex:1,
    fontSize: 15,
    fontWeight:"bold",
    justifyContent:"center"
  },

  view:{
    marginHorizontal:10,

  }
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: colors.lightBlue,
  //   borderColor: "transparent",
  //   borderRadius: 80,
  //   height: 40,
  //   marginVertical: 30,
  //   justifyContent: "center",

});
