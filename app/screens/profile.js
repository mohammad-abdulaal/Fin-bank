import * as React from 'react';
import { View , StyleSheet , Text , Button , Image} from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

const Profile = ({navigation},props) => {

    const [Name,setName]=useState("");
    const [Location,setLocation]=useState("");
    const [Email,setEmail]=useState("");
    const [Phonenumber,setPhonenumber]=useState("71560611");
    const [Account,setAccount]=useState("");
    const [FinNumber,setFinNumber]=useState("");
    const [loading,setLoading]=useState(true);
    let token=localStorage.getItem("token")
    useEffect(()=>{
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(
            'http://localhost:8000/api/user',
            config
          ).then(res => {
              setName({
                Name:res.data.first_name + " " + res.data.last_name
                })
              setEmail({
                email:res.data.email
                })
              setAccount({
                account_balance:res.data.account_balance
                })
              setLocation({
                location:res.data.location
                })
              setFinNumber({
                Fin_number:res.data.Fin_number
                })
              setLoading(false)
          })
          .catch((error) => {
                console.log(error)
              });
        //   setLoading(false)
    },[])
    console.log(loading)
    const [Edit,setEdit]=useState(false);
    if(loading){
        console.log("hi")
        return(
                <ActivityIndicator
                size={'large'}
                />


        )
    }
    else {
        console.log("ana")
        return (
            <>

                <View style={{marginLeft:-45 , marginTop:-65   }}>
                    <Image
                    source={require("../assets/Card_clear.png")}
                    style={{ width: "100%", height: 450,position:"relative"}}
                    />
                    <Text style={{ position:"absolute",top:"65%",left:"20%",fontWeight:'bold',fontSize:18 }}>{Name.Name}</Text>
                    <Text style={{ position:"absolute",top:"48%",left:"40%",fontWeight:'bold',fontSize:18 }}>{FinNumber.Fin_number}</Text>
                </View>
                <View style={styles.container_button_edit}>
                    { !Edit &&
                    <AppButton
                    title={<Entypo name="edit" size={12} color="white" />}
                    onPress={() => setEdit(true)}
                    style={{ height :28,width:42 , marginLeft:290, marginTop : -80}}
                    /> }
                </View>
               <View style={styles.card}>
                { Edit &&
                <View>
                <AppTextInput
                    value={Phonenumber}
                    onChangeText={phonenumber => setPhonenumber(phonenumber)}
                    style={{ marginLeft:10 , width : 200 }}
                />
                <AppButton
                title="Save"
                onPress={()=> setEdit(false)}
                style={{ width:130 , marginLeft:220 , marginTop:-60 }}
                />
                </View>
                }
                    <View style={styles.phone}>
                      <Card.Title
                       title={Phonenumber}
                       left={(props) => <FontAwesome {...props} name="phone-square" color="black" size={35} onPress={()=>setEdit(true)}/>}
                       />
                    </View>
                    <View style={styles.mail}>
                       <Card.Title
                        title={Email.email}
                        left={(props) => <MaterialIcons {...props} name="email" color="black" size={35} />}
                        />
                    </View>
                    <View >
                      <Card.Title
                       title={Location.location}
                       left={(props) => <Entypo {...props} name="location" color="black" size={30} />}
                       styles={styles.container}
                       />
                    </View>
                    <Card.Title
                    title= { Account.account_balance + '$' }
                    left={(props) => <FontAwesome5  {...props} name="money-bill" color="black" size={30} />}
                    />
                    <View style={styles.container_button}>
                      <AppButton
                      title="LOG OUT"
                      onPress={() => navigation.navigate('LandingScreen')}
                      style={styles.Button}
                      />
                    </View>
                </View>
            </>


        )
    }
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
        marginVertical:-5,
        color:'black'

    },
    container_Text:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30

    },
    container_Text:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30

    },
    container_button_edit:{

    },
    text:{
        fontSize:20,
        fontWeight:'bold',

    },
    card:{
        // backgroundColor:"#FFF",
        marginVertical:50,
        marginTop:-100

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
    },
    hi: {
        width: 100,
        height: 100
    }
}
)
export default Profile;
