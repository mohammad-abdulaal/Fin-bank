import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'
const Savings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>blank</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#add8e6'

    },
    text:{
        fontSize:20,
        fontWeight:'bold',

    }
})
export default Savings;
