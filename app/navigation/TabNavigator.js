import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import test from '../screens/test'
import TabBar from '../components/TabBar'
import Accounts from "../screens/Accounts";
import Savings from "../screens/Savings";
import Payments from "../screens/Payments";
import Profile from "../screens/Profile";
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
                name="Savings"
                component={Savings}
                initialParams={{ icon: "account-balance-wallet" }}
            />
            <Tab.Screen
                name="Pay"
                component={Payments}
                initialParams={{ icon: "payments" }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                initialParams={{ icon: "person" }}
            />
            {/* <Tab.Screen
                name="test"
                component={test}
                initialParams={{ icon: "notification" }}
            /> */}
        </Tab.Navigator>
    );
};

export default TabNavigator;