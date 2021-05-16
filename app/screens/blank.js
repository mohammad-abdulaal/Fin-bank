import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'
// import { Ionicons } from '@expo/vector-icons';
const blank = () => {
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

    },
    text:{
        fontSize:20,
        fontWeight:'bold',

    }
})
export default blank;
