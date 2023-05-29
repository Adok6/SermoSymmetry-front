import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen"

import ProfileScreen from "../screens/ProfileScreen";
import QueryScreen from "../screens/QueryScreen";
import SoundScreen from "../screens/SoundScreen";
import TherapistScreen from "../screens/TherapistScreen";
import ExercisesStack from "./ExercisesStack";
import SyllablesScreen from "../screens/SyllablesScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return ( 
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExercisesStack"
        component={ExercisesStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QueryScreen"
        component={QueryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SoundScreen"
        component={SoundScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SyllablesScreen"
        component={SyllablesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TherapistScreen"
        component={TherapistScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
