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
import AppButton from '../components/AppButton';
export default class Accounts extends Component {

    // const [currency, setCurrency] = useState('');

    constructor(props) {
      super(props);
      this.state = {
        showButton:false,
        currency_name:this.props,
        modIndex: null,
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
            currency_name: "Kuwaiti Dinar",
            owner: {
              id: 1,
              first_name: "bob",
              last_name: "smith",
              currency_amount:"800"
            },
          },
          {
            id: 2,
            currency_name: "United States Dollar",
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
           backgroundColor:"#FFF",
           marginVertical:5
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
            marginTop:45
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
          // marginVertical:5
        },
        hi:{
          width:160,

        },
        hi2:{
          width:180

        }
      });
      const entries = this.state.data.map((entry, i) => {
        return (
            <View style={styles.test}>
                <Card.Title
                key={i}
                title={entry.currency_name}
                subtitle=
                    {"" + entry.owner
                    ? entry.owner.currency_amount
                    : "N/A"}

                right={(props) => <MaterialIcons {...props} name="delete"  onPress={() => {this.handleDelete(i)}}  />}
                />
            </View>


        );
      });
      return (
        <ScrollView >
          <View style={styles.container_Text}>
            <Text style={styles.text}>See Your Account Balance In Different Currency</Text>
          </View>
          {this.state.user.id ? (

            <View >
              <View  >
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
                marginVertical: -3,
                backgroundColor:0
                ,
              }}>
                <AppButton
                  onPress={this.handleAdd}
                  value={this.props.items}
                  title="Open Account "
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
      let newAccount = {
        id: newid,
        currency_name: this.state.currency_name,
        owner: {
          id: this.state.user.id,
          first_name: this.state.user.first_name,
          last_name: this.state.user.last_name,
          currency_amount:5000 * 1500
        },
      };

      // Add new Account object to data then clear input
      this.setState((state) => ({
        data: [...state.data, newAccount],
        currency_name:this.props.value,
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