import { Linking } from 'react-native'
import React, { Component } from "react";
// import { useState, useEffect } from 'react';
import * as react from 'react';
import {
    TextInput,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView
} from "react-native";
import { Card , IconButton} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import CurrencySelector from "../components/CurrencySelector";
import AppSelector from "../components/CurrencySelector";
import {Header} from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import axios from 'axios'
import { Image } from 'react-native';
export default class Accounts extends Component {

    // const [currency, setCurrency] = useState('');

    constructor(props) {
      super(props);
      this.state = {
        showButton:false,
        currency_name:this.props,
        currency_amount:5000,
        modIndex: null,
        currency_times_usaed:"",
        currency_times_useuro:"",
        currency_times_usqtr:"",
        currency_times_usomr:"",
        editmode: false,
        input: '',
        user: {
          id: 1,
          first_name: "bob",
          last_name: "smith",
        },
        data: [

          {
            id: 2,
            currency_name: "United States Dollars(USD)",
            owner: {
              id: 1,
              first_name: "Mohammad",
              last_name: "Abdulaal",
              currency_amount:"5000 ",
            },
          }
        ],
        // data: [],
      };
    }
    componentDidMount(){
      // axios
      //     .get('http://api.currencylayer.com/live?access_key=f06a259aafbf855920bb8ed1e4e97c59')
      //     .then((res)=> {
      //       console.log('currency:',res.data)
      //       console.log('hi',res.data.quotes.USDAED)
      //       console.log('hi2',res.data.quotes.USDOMR)
      //       // this.setTimeout(() => {
      //         this.setState(
      //           {
      //             currency_times_usaed:res.data.quotes.USDAED,
      //             currency_times_useuro:res.data.quotes.USDEUR,
      //             currency_times_usqtr:res.data.quotes.USDQAR,
      //             currency_times_usomr:res.data.quotes.USDOMR,

      //           }
      //         );
      //         console.log(this.state.currency_times_usaed)
      //       // },[]);

      //     }
      //     )
    }
    render() {
        // Stylehsheet
        const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },

        mainCard: {
          marginBottom: 20,
        },
        Text:{
            fontWeight:'bold'
        },

        card: {
          borderWidth: 1,
          fontSize: 20,
          borderRadius: 8,
          borderColor: "#ba55d3",
          width: 300,
          height: 150,
          padding: 20,
          marginBottom: 20,
          marginTop: 20,
        },
        test:{
          //  backgroundColor:"#FFF",
          //  marginVertical:5,
          //  shadowColor: "#000",
          //  shadowOffset: {
          //    width: 0,
          //    height: 12,
          //   },
          //  shadowOpacity: 0.58,
          //  shadowRadius: 16.00,
          //  elevation: 24,
          backgroundColor:'#FFF',
           borderRadius: 10 ,
           width:350,
           marginVertical: 5,
           marginLeft:5

          },
        fixToText: {
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 10,
        },
        text: {
            fontSize:15,
            fontWeight:'bold',
        },
        container_Text:{
            flex:10,
            justifyContent:'center',
            alignItems:'center',
            marginTop:45,
            marginVertical:-5
        },
        text_title: {
          fontSize:20,
          fontWeight:'bold'
        },
        selector:{
          backgroundColor:0,
          marginHorizontal:55
        },
        currency:{
          backgroundColor:0,
          marginVertical:10
        },
        hi:{
          width:160,

        },
        hi2:{
          width:180

        },
        // test2:{
        //   backgroundColor:'#FFF'
        // },
        hi3:{
          marginLeft:-110,
          marginVertical:-210,
          marginTop:-290
        },
        hi4:{
          marginVertical:-10,
          padding:10,
          marginLeft:-10
        }
      });
      const entries = this.state.data.map((entry, i) => {
        return (
            <View style={styles.test}>
                <Card>
                  <Card.Title
                  key={i}
                  title={entry.currency_name}
                  subtitle=
                    {"" + entry.owner
                    ? entry.owner.currency_amount
                    : "N/A"}
                  right={(props) => <Entypo {...props} name="cross"  onPress={() => {this.handleDelete(i)}}  />}
                  />

                </Card>
            </View>


        );
      });
      return (
        <View>
          <ScrollView >
          <View style={styles.container_Text}>
            <View style={styles.hi3}>
              <Image
              source={require("../assets/finbank_logo.png")}
              style={{ width: 600, height: 600 }}
              />
            </View>
            <Text style={styles.text}>Check Your Account Balance In Different Currencies</Text>
          </View>
          {this.state.user.id ? (

            <View >
              <View style={styles.hi4}  >
                <CurrencySelector
                style={styles.currency}
                onChange={this.onCurrencySelectorChange}

                // onPress={()=>this.onCurrencySelectorChange}
                />
              </View>

              <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginVertical: -5,
                backgroundColor:0
                ,
              }}>
                <AppButton
                  onPress={this.handleAdd}
                  value={this.props.items}
                  title="Check Account"
                  color="#1C8FCB"
                  style={styles.hi}
                  // style={{ width: "40%" }}
                />
                <AppButton
                  onPress={() => Linking.openURL('mailto:support@example.com?subject=SuggestCurrency&body=Add Currency to the board :') }
                  value={this.props.items}
                  title="Suggest Currency "
                  color="#1C8FCB"
                  style={styles.hi2}
                  // style={{ width: "40%" }}
                />

              </View>
            </View>

          ) : (
            <Text> View Accounts</Text>
          )}
          <ScrollView>{entries}</ScrollView>
          {/* <Text style={styles.Text}>Suggest us an currency you would like to see in currency list by email</Text> */}
          </ScrollView>
        </View>
      );
    }
    onCurrencySelectorChange = (value,index) =>{
      this.setState({
          currency_name: value,
        })
        // console.log(value)
        // console.log("hi")
    }


    // Member functions
    handleInput = (e) => {
      this.setState({
        input: e.target.value,
      });
    };
    handleAdd = () => {
      // Get last id to create new one
      console.log('from add:', this.state.currency_name)
      let currentData = this.state.data;
      if (currentData.length > 0) {
        var newid = currentData[currentData.length - 1].id + 1;
      } else {
        var newid = 0;
      }
      // Create new Account object
      if (this.state.currency_name==="Dirham Emirati(AED)"){
        let a=this.state.currency_times_usaed
        currentData={
          currency_name:this.state.currency_name,
          owner:{
            currency_amount:this.state.currency_amount*a
          }

        }
      }
      if (this.state.currency_name==="Euro(€)"){
        let b=this.state.currency_times_useuro
        currentData={
          currency_name:this.state.currency_name,
          owner:{
            currency_amount:this.state.currency_amount*b
          }

        }
      }
      if (this.state.currency_name==="Riyal Qatar(QAR)"){
        let c=this.state.currency_times_usqtr
        currentData={
          currency_name:this.state.currency_name,
          owner:{
            currency_amount:this.state.currency_amount*c
          }

        }
      }
      if (this.state.currency_name==="Omani Riyal(OMR)"){
        let d=this.state.currency_times_usomr
        currentData={
          currency_name:this.state.currency_name,
          owner:{
            currency_amount:this.state.currency_amount*d
          }

        }
      }
      let newAccount = {
        id: newid,
        currency_name: this.state.currency_name,
        currency_amount:this.state.currency_amount,
        owner: {
          id: this.state.user.id,
          first_name: this.state.user.first_name,
          last_name: this.state.user.last_name,
          currency_amount:this.state.currency_amount
        },
      };

      // Add new Account object to data then clear input
      this.setState((state) => ({
        data: [...state.data, currentData],
        currency_name:this.props.value,
        currency_amount:this.state.currency_amount,
      }));
    };

    // Handle delete Account from view
    handleDelete = (index) => {
      this.setState((state) => {
        // Copy old data and remove current index
        const data = [...state.data];
        data.splice(index, 1);
        return { data };
      });
    };
  }