import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../headers/HeaderAAC';
import axios from 'axios';
import { Audio } from 'expo-av';
import { API_URL } from '../http';


const PhraseScreen = ({route}) => {
  const { id } = route.params;
  const [data, setData] = useState([]);


  // const categ = useCallback(async () => {
  //   axios.get(API_URL+`/phrases/phraseBank/${id}`).then((response) => {
  //     if (response)
  //       setData(response.data)
  //   });

  // });

  // useEffect(() => {
  //   categ();
  // }, []);

  // for error check

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(API_URL + `/phrases/phraseBank/${id}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSoundPlayback = async (soundLink) => {
    if (soundLink) {
      try {
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync({ uri: soundLink });
        await soundObject.playAsync();
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  };
  

  

  // first version

  // const handleSoundPlayback = async (soundLink) => {
  //   if (soundLink) {
  //     try {
  //       const { sound } = await Audio.Sound.createAsync({ uri: soundLink });
  //       await sound.setPositionAsync(0);
  //       await sound.playAsync();
  //       console.log(soundLink);
  //     } catch (error) {
  //       console.error('Error playing sound:', error);
  //     }
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.exercisesContainer}>
        {data.map((value) => (
          <TouchableOpacity
            onPress={() => handleSoundPlayback(value.sound)}
            style={styles.exerciseBlock}
            key={value.id}
          >
            <Text style={styles.exerciseEmoji}>{value.emoji}</Text>
            <Text style={styles.exerciseName}>{value.text}</Text>
          </TouchableOpacity>
        ))}
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
    width: '90%',
    height: 180,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  exerciseEmoji: {
    fontSize: 18,
    textAlign: 'left',
  },

});


export default PhraseScreen;
