import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SettingsScreen from "../screens/SettingsScreen"
import AACStack from "./AACStack"
import HomeStack from "./HomeStack"


const Tab = createBottomTabNavigator();

export default function BottomNavigate() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AAC"
        component={AACStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}