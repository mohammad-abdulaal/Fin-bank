import * as React from 'react';
import { View , StyleSheet , Text , Button} from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
const Profile = ({navigation}) => {
    return (
        <View style={styles.card} >
            <View style={styles.container_Text}>
              <Text style={styles.text}>User Info </Text>
            </View>
            <View style={styles.location}>
                <Card.Title
                title="Mohammad Abdulaal"
                left={(props) => <FontAwesome {...props} name="user" color="black" size={35} />}
                styles={styles.container}
                />
            </View>
            <View >
                <Card.Title
                title="Beirut"
                left={(props) => <Entypo {...props} name="location" color="black" size={30} />}
                styles={styles.container}
                />
            </View>
            <View style={styles.mail}>
                <Card.Title
                title="muhamed.abedlaal@gmail.com"
                left={(props) => <MaterialIcons {...props} name="email" color="black" size={35} />}
                />
            </View>
            <View style={styles.phone}>
                <Card.Title
                title="71560611"
                left={(props) => <FontAwesome {...props} name="phone-square" color="black" size={35}/>}
                />
            </View>
            <Card.Title
            title="5000"
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
        backgroundColor:"#FFF",
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
