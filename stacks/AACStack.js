import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AACScreen from "../screens/AACScreen"
import PhraseBankScreen from "../screens/PhraseBankScreen";
import PhraseScreen from "../screens/PhraseScreen";

const Stack = createNativeStackNavigator();

const AACStack = () => {
  return ( 
    <Stack.Navigator initialRouteName="AACScreen">
     <Stack.Screen
        name="AACScreen"
        component={AACScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhraseBankScreen"
        component={PhraseBankScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhraseScreen"
        component={PhraseScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AACStack;
