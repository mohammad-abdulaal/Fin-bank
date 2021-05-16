import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, style = {}, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="black"
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    borderRadius: 25,
    flexDirection: "row",
    width: "95%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
