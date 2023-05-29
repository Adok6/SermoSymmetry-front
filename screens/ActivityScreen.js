import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../headers/HeaderExercise';
import axios from 'axios';
import { API_URL } from '../http';

const ActivityScreen = ({route}) => {
  const { id } = route.params;
  const [data, setData] = useState([]);
  
  
  const categ = useCallback(async () => {
    axios.get(API_URL+`/exercises/exerciseSubCategory/${id}`).then((response) => {
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
            <View key={value.id} style={styles.exerciseBlock}>
              <Image source={{ uri: API_URL+ value.image.slice(21) }} style={styles.exerciseImage} />
              <Text style={styles.exerciseName}>{value.text}</Text>
            </View>
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
  exercisesContainer: {
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
  },
  exerciseBlock: {
    width: '100%',
    height: 500,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  exerciseEmoji: {
    textAlign: 'left',
  },

});

export default ActivityScreen;
