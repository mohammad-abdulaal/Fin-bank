import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'
// import { Ionicons } from '@expo/vector-icons';
const profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>profile</Text>
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
export default profile;
