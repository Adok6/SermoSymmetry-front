import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../screens/RegistrationScreen"
import LoginScreen from "../screens/LoginScreen"
import WelcomeScreen from "../screens/WelcomeScreen"

import BottomStack from "./BottomStack";

const Stack = createNativeStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;