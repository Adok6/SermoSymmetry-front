import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Button, TextInput } from "react-native";
import React, { useState, useEffect, useCallback } from 'react';

import Header from '../headers/HeaderTherapist';
import axios from 'axios';
import { API_URL } from '../http';

const TherapistScreen = () => { // {route}
  // const { id } = route.params;
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const therapist = useCallback(async () => {
    axios.get(API_URL+'/speech-therapist/').then((response) => {
      if (response)
        setData(response.data)
    });

  });

  useEffect(() => {
    therapist();
  }, []);

  const handleSearch = () => {
    const filteredData = data.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchText.toLowerCase()) ||
        value.phone.toLowerCase().includes(searchText.toLowerCase()) ||
        value.email.toLowerCase().includes(searchText.toLowerCase()) ||
        value.address.toLowerCase().includes(searchText.toLowerCase()) ||
        value.rating.toString().includes(searchText)
      );
    });
    setData(filteredData);
  };

  return (
    <ScrollView style={styles.mainback}>
      {/* header */}
      <Header/>

      {/* search */}
      <View style={[styles.container]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Поиск"
          onChangeText={setSearchText}
          value={searchText}
        />
        <Button title="Search" onPress={handleSearch} />

        {/* output of search */}
        <View style={[styles.container]}>
          {data && data.map((value) => {
            return (
              <TouchableOpacity style={styles.exerciseBlock} key={value.id}>
                <Text style={styles.exerciseName}>Имя: {value.name}</Text>
                <Text style={styles.exerciseName}>Номер телефона: {value.phone}</Text>
                <Text style={styles.exerciseName}>Электронная почта: {value.email}</Text>
                <Text style={styles.exerciseName}>Адрес: {value.address}</Text>
                <Text style={styles.exerciseName}>Рейтинг: {value.rating}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

    </ScrollView>
    )
};

export default TherapistScreen;


const styles = StyleSheet.create({
  mainback: {
    flex: 1,
    backgroundColor: "#e3e3e3",
  },

  container: {
    flex: 1,
    width: 375,
    alignItems: "center",
    justifyContent: 'center'
  },
  resultsContainer: {
    flex: 1,
    width: '100%',
  },
  // search-start
  searchInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  // search-end

  // output start
  // old
  docs: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 350,
    height: 120,
    justifyContent: "center",
    borderRadius: 10,
  },
  // new
  exercisesContainer: {
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
  },
  exerciseBlock: {
    width: '90%',
    height: 180,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
