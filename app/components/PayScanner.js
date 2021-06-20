import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AppButton from './AppButton';

export default function PayScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  let balance=5000;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data,amount }) => {
    // setScanned(true);
    // if (`${data}`=='FinBank'){
      setScanned(true);
      alert(`The items is purchased , thank you for choosing us`);
      // alert(`${data}`)
      console.log(typeof(data))
      console.log(data)
      console.log(typeof(JSON.stringify(`${data}`)))
      amount=5000-data
      console.log(amount)
    // }
    // else{
    //   setScanned(false)
    // }
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };


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
      />
      {scanned &&
      <View >
      <AppButton
      title={'Tap to Scan Again'}
      onPress={() => setScanned(false)}
      />
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