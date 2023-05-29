import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_URL } from '../http';
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  
  const [token, setToken] = useState(null)
  useEffect( () => {
    async function fetchData() {
      const user = await AsyncStorage.getItem("user")
      if (user) {
        const bearer = JSON.parse(user)
      setToken(bearer.access_token)
      }
      }
  fetchData()
  }, [])

  // console.log('tuta token' ,token);

  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const categ = useCallback(async () => {
  // console.log('check connection');
  axios.get(API_URL+'/users/me', config).then((response) => {
    if (response)
      setData(response.data)
      console.log('name', data);
  });

});

useEffect(() => {
  categ();
}, []);
// console.log('check for data', data);

  return (
    <SafeAreaView style={styles.mainback}>

      <View style={[styles.container, styles.head, { flex: 0.6 }]}>
          <TouchableOpacity style={styles.usericontouch} activeOpacity={0.5} onPress={() => navigation.navigate("ProfileScreen")}>
            <Image
              style={styles.usericon}
              source={require("../assets/images/user.png")}
            />
          </TouchableOpacity>

          <View style={[styles.welcome, styles.w1]}>
            <Text>Привет, {data.firstName}!</Text>
          </View>
      </View>


      {/* slider */}

      <View style={[styles.container]}>
        <View
          style={[
            styles.slider,
            styles.w1,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <TouchableOpacity style={styles.btntouch} activeOpacity={0.5}>
            <Image
              style={styles.btnicon}
              source={require("../assets/images/arrowL.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btntouch} activeOpacity={0.5}>
            <Image
              style={styles.btnicon}
              source={require("../assets/images/arrowR.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* services */}

      <View style={[styles.container, { flex: 1.8 }]}>
        <View style={[styles.btn, styles.w1]}>
          <Button
            title="Проверка"
            onPress={() => navigation.navigate("QueryScreen")}
          />
        </View>

        <View style={[styles.btn, styles.w1]}>
          <Button
            title="Упражнения"
            onPress={() => navigation.navigate("ExercisesStack")}
          />
        </View>

        <View style={[styles.btn, styles.w1]}>
          <Button
            title="Автоматизация звуков"
            onPress={() => navigation.navigate("SoundScreen")} 
          />
        </View>

        <View style={[styles.btn, styles.w1]}>
          <Button
            title="Логопеды"
            onPress={() => navigation.navigate("TherapistScreen")}
          />
        </View>
        
      </View>
      
    </SafeAreaView>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  mainback: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
  },

  container: {
    flex: 1.5,
    width: 375,
    alignItems: "center",
    justifyContent: "space-between",
  },

  w: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  w1: {
    borderRadius: 5,
  },

  btn: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 300,
    height: 45,
    justifyContent: "center",
    marginTop: -40,
    marginBottom: 20,
  },

  // for bottom buttons

  slider: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 360,
    height: 170,
    justifyContent: "center",
  },

  btntouch: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  btnicon: {
    height: 25,
    width: 25,
  },

  head: {
    flexDirection: "row",
    justifyContent: "left",
  },

  usericon: {
    height: 50,
    width: 50,
    margin: 40,
    // justifyContent: 'space-between'
  },

  usericontouch: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
  },

  welcome: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 45,
  },

});
