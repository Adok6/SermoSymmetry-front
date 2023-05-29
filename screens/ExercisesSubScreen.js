import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../headers/HeaderExercise';
import axios from 'axios';
import { API_URL } from '../http';

const ExercisesSubScreen = () => {
  const navigation = useNavigation();

  
  const [data, setData] = useState([]);
  
  
  const categ = useCallback(async () => {
    axios.get(API_URL+'/exercise-sub-categories/').then((response) => {
      if (response)
        setData(response.data)
    });
  
  });
  
  useEffect(() => {
    categ();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.exercisesContainer}>
        {data && data.map((value) => {
            return (
              <TouchableOpacity onPress={() => {navigation.navigate("ActivityScreen", {id: value.id, text: value.text}) }} key={value.id} style={styles.exerciseBlock}>
                <Text style={styles.exerciseName}>{value.text}</Text>
              </TouchableOpacity>
            )
        })}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e3e3e3',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center"
  },
  exercisesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  exerciseBlock: {
    width: '48%',
    height: 200,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default ExercisesSubScreen;
