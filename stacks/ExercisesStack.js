import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExercisesScreen from "../screens/ExercisesScreen"
import ExercisesSubScreen from "../screens/ExercisesSubScreen";
import ActivityScreen from "../screens/ActivityScreen";

const Stack = createNativeStackNavigator();

const ExercisesStack = () => {
  return ( 
    <Stack.Navigator initialRouteName="ExercisesScreen">
      <Stack.Screen
        name="ExercisesScreen"
        component={ExercisesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExercisesSubScreen"
        component={ExercisesSubScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ExercisesStack;
