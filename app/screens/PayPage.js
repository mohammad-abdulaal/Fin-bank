import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View , CheckBox } from 'react-native';

import SearchableDropdown from 'react-native-searchable-dropdown';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import { ImageBackground } from 'react-native';
import * as Yup from "yup";
import { Image } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

const PayPage = ({navigation}) =>{

    const initialValue = {
        value: ""
      }

    const [amount,setAmount] = useState(initialValue);

    // const [amount,setAmount] = useState("");

    const HandleAmount = (textValue)=>{
        setAmount((userdata)=>({
            ...userdata,
            amount:textValue,
        }));
    }
    console.log(amount)
    return (
<>
        <View style={styles.container}>
            <Text style={styles.text_1}>
                Enter Price ($)
            </Text>
            <AppTextInput
            keyboardType="numeric"
            // onChangeText={HandleAmount}
            onChangeText={HandleAmount}
            amount={amount}/>
            <AppButton
            title="Proceed"
            onPress={()=>navigation.navigate("Pay By Transfer", {amountToPay:amount.amount})}
            // onPress={HandleTransfer}
            />
            <Text style={styles.text_2}>Or</Text>
            <AppButton
            title="Scan Price"
            onPress={()=>navigation.navigate("Scan Product")}
            />
            <BackgroundImage
             source={require('../assets/money-flip-1.gif')}
             style={{  width: 280, height:200,marginTop:85,marginLeft:25, flex: 1}}
            />
        </View>

        </>
    )
}
export default PayPage;
const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginVertical:50,
      marginLeft:15,
    //   backgroundColor: 'white',
    },
    text_1: {
        fontSize:15,
        fontWeight:'bold',
        // marginLeft:-5
    },
    text_2: {
        fontSize:15,
        fontWeight:'bold',
        marginLeft:150
    },
})