import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native'
export default function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color="#FFF"
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff5252',
        padding:15,
        marginTop:10,
        width:70,
        justifyContent:"center",
        alignItems:"center"
    }
})
