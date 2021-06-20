import React, { useState } from 'react';
import Us from 'react-flags-select';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView
} from "react-native";
const test = () => {
    const [selected, setSelected] = useState('');
    return(
      <View>
        <Us /> United States
      </View>

    )

}

export default test;
