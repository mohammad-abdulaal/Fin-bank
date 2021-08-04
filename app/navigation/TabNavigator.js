import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import test from '../screens/Transfer'
import TabBar from '../components/TabBar'
import Accounts from "../screens/Accounts";
import Savings from "../screens/Savings";

import Profile from "../screens/Profile";

import PayPage from "../screens/PayPage";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                name="Accounts"
                component={Accounts}
                initialParams={{ icon: "account-balance" }} // for giving every component an icon
                options={{ title:'Accounts' }}
            />
            <Tab.Screen
                name="Pay"
                component={PayPage}
                initialParams={{ icon: "payment" }}
            />
            <Tab.Screen
                name="Wallet"
                component={Savings}
                initialParams={{ icon: "account-balance-wallet" }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                initialParams={{ icon: "person" }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;