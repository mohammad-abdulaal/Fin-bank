import React from 'react'
import { StyleSheet, Text, View , Button,ImageBackground , Image} from 'react-native'
import AppButton from '../components/AppButton'
const Payments = ({navigation}) => {
    return (
        // <ImageBackground
        // source={require("../assets/digital-money-background.jpg")}
        // style={styles.imageBackground}>
            <View style={styles.container}>
            <Image
            source={require("../assets/debit.png")}
            style={{ width: 500, height: 500 }}
            />
            <Text style={styles.text}>Press To Pay</Text>
            <AppButton
            title='Pay'
            style={styles.button}
            onPress={()=>navigation.navigate("PayScanner")}
            />
            </View>
        // </ImageBackground>

    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    text:{
        fontSize:20,
        fontWeight:'bold',

    },
    imageBackground: {
        flex: 1,
    },
    button:{
        width:200
    }
})
export default Payments;
