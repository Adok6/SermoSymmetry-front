import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeStack from "../stacks/WelcomeStack"
import BottomStack from "../stacks/BottomStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NavContainer = () => {
  const [token, setToken] = useState(null)
  useEffect( () => {
    async function fetchData() {
      const user = await AsyncStorage.getItem("user")
      setToken(user)
    }
  fetchData()
  }, [])
  return (
    <NavigationContainer>
      {token === null ? <WelcomeStack /> : <BottomStack />}
      {/* !== >>> === 
          with acc  ------  !==
          without acc ----- ===
      */}
    </NavigationContainer>
  );
};

export default NavContainer;
