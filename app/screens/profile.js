import * as React from 'react';
import { View , StyleSheet , Text , Button} from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import axios from 'axios';
import { useState , useEffect } from 'react';

const Profile = ({navigation},props) => {
    const [Name,setName]=useState("");
    const [Location,setLocation]=useState("");
    const [Email,setEmail]=useState("");
    const [Phonenumber,setPhonenumber]=useState("");
    const [Account,setAccount]=useState("");
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/user',{
    //         headers: {
    //             'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzZiNzgyN2JhZTc1NzJiNGExYzk4MjQxOTEwZjkzMjRiZjQ5ZWE0ZDFlMjAxZGRjYjdhZmFiMDI3NzQ1YWI0OTBhNWRhOGM2NGI1NTk5YjMiLCJpYXQiOjE2MjI2Mjg2NDEsIm5iZiI6MTYyMjYyODY0MSwiZXhwIjoxNjU0MTY0NjQxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.aCgrIaIMAgLfs8wwXXrAdfnZWkSeZV9G_oEtvIZir-CD9drLAJnZA8uMPPJ4EH098octlSempk3JNJM7X3s6F8jVHN0x3qZX6lRcUWjbBb_ioZAMnmRO_H59R3DpIMHDmDMCGGczQQOB6o_-OzZ5wb_J8EMkF3hpLPnmAbQjMZFa9m9ilG71kUBc94GOvEyAn9fzCzlOmRPeJu0F0dXiDJWuHEEoFVLeH4KL4YejOy9ZqBloFQ8GRSsQ0OYMuZI3rUI3I0pYT3UUEt1WD2QZNEJrbXGxyVe1T1G2v0WbpzodVGrFrActUmZgJ82sHr4tF1eBNU-Ud2pIh9qaw9aOVK2lP5Hyq4AeGoCnR7pezQVZ9bMt4eR46qXyIiew9RWjEvTp-i1HslWlHssQKI1PrxkmVJhCeIzhWebBh8sK1O6owE7qgELveUZKr8ddFhNNO_dXeITUaQ5MKWa4RrRfWCL6ZNBrtNnFirg7Fm2o3EH90NeLCnfUTm8-Vk9ds9vTlDbc2MgT8Q-OI2I9tY5pGr0YEaUnci_lY5xyXwl26CkYvozQmKraLpMQD_WX2xthM9ihowpuuRoFr8eyIC7iMyNPhq_bwN84VVhdUn2GoKfEdZzjSqZNZ7q81v_xZB6dmnkO0Kkm13Dxumd0rc9JE50L3aIs5NRgJgz-o2TjzuU'
    //         }
    //     })
    //     .then((res)=>{
    //         console.log('user',res.data)
    //         console.log(res.data.id)
    //         console.log(res.data.first_name)
    //         setName({
    //             Name:res.data.first_name + " " + res.data.last_name
    //         })
    //         setLocation({
    //             location:res.data.location
    //         })
    //         setEmail({
    //             email:res.data.email
    //         })
    //         setPhonenumber({
    //             phone_number:res.data.phone_number
    //         })
    //         setAccount({
    //             account_balance:res.data.account_balance
    //         })
    //     }
    //     )
    // },0.5)




    return (
        <View style={styles.card}>
            <View style={styles.container_Text}>
              <Text style={styles.text}>User Info </Text>
            </View>
            <View style={styles.location}>
                <Card.Title
                // title="Mohammad Abdulaal"
                title={Name.Name}
                left={(props) => <FontAwesome {...props} name="user" color="black" size={35} />}
                styles={styles.container}
                />
            </View>
            <View >
                <Card.Title
                // title={Location.location}
                title="Beirut"
                left={(props) => <Entypo {...props} name="location" color="black" size={30} />}
                styles={styles.container}
                />
            </View>
            <View style={styles.mail}>
                <Card.Title
                // title={Email.email}
                left={(props) => <MaterialIcons {...props} name="email" color="black" size={35} />}
                />
            </View>
            <View style={styles.phone}>
                <Card.Title
                // title={Phonenumber.phone_number}
                title="71560611"
                left={(props) => <FontAwesome {...props} name="phone-square" color="black" size={35}/>}
                />
            </View>
            <Card.Title
            // title= { Account.account_balance + '$' }
            title="5000 $"
            left={(props) => <FontAwesome5  {...props} name="money-bill" color="black" size={30} />}
            />
            <View style={styles.container_button}>
                <AppButton
                title="LOG OUT"
                onPress={() => navigation.navigate('LandingScreen')}
            //     onPress={(values) => {axios.get('http://localhost:8000/api/logout')
            //     .then((res)=>{
            //         if(res.status == 200){
            //             console.log("bye")
            //             navigation.navigate('LandingScreen')
            //         }
            //     })
            // }}
                style={styles.Button}
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    container_button_suggestion:{
        marginVertical:20
    },
    container_button:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30,
        color:'black'

    },
    container_Text:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30

    },
    text:{
        fontSize:20,
        fontWeight:'bold',

    },
    card:{
        // backgroundColor:"#FFF",
        marginVertical:50,
        marginTop:100

    },
    location:{
        marginLeft:2
    },
    phone:{
        marginLeft:2
    },
    mail:{
        marginLeft:-1
    },
    Button:{
        width:160
    }
}
)
export default Profile;
