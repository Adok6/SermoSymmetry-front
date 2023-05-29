import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavContainer from "./components/NavContainer";
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

export default function App() {
  const App = () => {
    useEffect(() => {
      SplashScreen.hide();
    }, []);
  }

  return (
    <SafeAreaProvider>
      <NavContainer />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
