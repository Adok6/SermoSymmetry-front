import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from '../headers/HeaderProfile';
import axios from 'axios';
import { API_URL } from '../http';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
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
      console.log('name', response.data);
  });

});

useEffect(() => {
  categ();
}, []);
// console.log('check for data', data);




  return (
    <ScrollView style={styles.container}>
      <Header/>
      <View style={styles.header}>
        <Image source={require("../assets/images/user.png")} style={styles.avatar}/>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>Имя: {data.firstName}</Text>
          <Text style={styles.name}>Фамилия: {data.lastName}</Text>
          <Text style={styles.name}>Электронная почта: {data.email}</Text>
          <Text style={styles.name}>Роль: {data.role}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>description</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  email: {
    fontSize: 10,
    color: "#666",
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
  messageButton: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 16,
  },
  messageButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    padding: 16,
    flex: 1,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default ProfileScreen;
