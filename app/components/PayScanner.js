import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AppButton from './AppButton';
import { Alert } from 'react-native';

export default function PayScanner({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  let balance=5000;
  let amountToPay = "";
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const handleBarCodeScanned = ({ amount , data }) => {
    // setScanned(true);
    // if (`${data}`=='FinBank'){
      setScanned(true);
      // alert(`The price of the item you're purchasing is $${data}. `);
      Alert.alert(
        "Purchase Alert!",
        `The price of the item you're purchasing is $${data}`,
        [
          { text: "Proceed" , onPress:() => navigation.navigate("Pay By Transfer",{amountToPay:amountToPay} )},
        ]
      )
      amountToPay = data
      console.log("amountToPay: ", amountToPay)
      console.log(typeof(data))
      console.log("Amount: ", data)
      console.log(typeof(JSON.stringify(`${data}`)))
      amount=5000-data
      console.log(amount)
    // }
    // else{
    //   setScanned(false)
    // }
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  // console.log(data)


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        // value={console.log("hi",amountToPay)}
      />
      {scanned &&
      <View >
      {/* <AppButton
      title={'Pay'}

      onPress={() => navigation.navigate("Pay By Transfer",{amountToPay:amountToPay} )}
      // onPress={() => console.log("hi",amountToPay)}
      /> */}
      </View>
      }

    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})