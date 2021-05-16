import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/home'
import blank from '../screens/blank'
import test from '../screens/test'
import notifications from '../screens/notifications'
import profile from '../screens/profile'
import TabBar from '../components/TabBar'
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{ icon: "home" }} // for giving every component an icon
            />
            <Tab.Screen
                name="blank"
                component={blank}
                initialParams={{ icon: "plus" }}
            />
            <Tab.Screen
                name="Profile"
                component={profile}
                initialParams={{ icon: "user" }}
            />
            <Tab.Screen
                name="Notifications"
                component={notifications}
                initialParams={{ icon: "notification" }}
            />
            <Tab.Screen
                name="test"
                component={test}
                initialParams={{ icon: "notification" }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;