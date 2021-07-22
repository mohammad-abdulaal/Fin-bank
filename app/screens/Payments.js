import React , {useEffect , useState} from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View , Button,ImageBackground , Image} from 'react-native'
import AppButton from '../components/AppButton'
import HeaderTransfer from '../components/HeaderTransfer'

const Payments = ({navigation}) => {
    return (
        <>
        <View style={styles.container}>

            <Image
            source={require("../assets/Card_clear.png")}
            style={{ width: 450, height: 450,position:"absolute"}}
            />
            <View style={styles.container_text}>
                <Text style={styles.text_number}>0012-3344-5566-7788</Text>
            </View>
            {/* <Text style={styles.text_number}>0012-3344-5566-7788</Text> */}
            <Text style={styles.text_name}>Mohammad Abdulaal</Text>
            </View>
            <AppButton
            title='Pay'
            style={styles.button}
            // onPress={()=>navigation.navigate("PayScanner")}
            onPress={()=>navigation.navigate("Payment")}
            />
        </>

    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:-35,
        marginVertical:50
    },
    text:{
        fontSize:35,
        fontWeight:'bold',

    },
    imageBackground: {
        flex: 1,
    },
    button:{
        width:200,
        // fontWeight:'bold',
        // padding:12,
        fontSize:15,
        marginLeft:80,
        marginVertical:600,
        position:"absolute"

    },
    text_number:{
        marginLeft:80,
        fontWeight:'bold',
        fontSize:18

    },
    text_name:{
        marginLeft:-45,
        fontWeight:'bold',
        fontSize:18,
        marginTop:138,
    },
    container_card:{
        marginHorizontal:-50
    },
    container_text:{
        position:"absolute"
    }
})
export default Payments;
