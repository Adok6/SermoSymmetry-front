import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Header from '../headers/HeaderSound';
import { useNavigation } from "@react-navigation/native";

const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

// const navigation = useNavigation();

const SoundScreen = () => {
  let sound = null;

  const playSound = async (letter) => {
  if (sound !== null) {
    // If sound is already playing, stop it
    await sound.stopAsync();
    sound = null;
    return;
  }

  let soundObject = null;
  
  switch (letter) {
    case 'А':
      soundObject = require('../assets/rusAlph/А.mp3');
      break;
    case 'Б':
      soundObject = require('../assets/rusAlph/А.mp3'); // make another sound for future dev
      break;
    // Add cases for other letters
    default:
      console.log('Invalid letter');
      return;
  }
  
  const { sound: newSound } = await Audio.Sound.createAsync(soundObject);
  sound = newSound;
  await sound.playAsync();
};

  return (
    <View style={styles.container}>
    <Header/>
    <Text style={styles.subtitle}></Text>
      <View style={styles.lettersContainer}>
        {letters.map((letter) => (
          <TouchableOpacity
            key={letter}
            style={styles.letterButton}
            onPress={() => playSound(letter)}
            // onPress={() => navigation.navigate("LettersScreen")} for future dev
          >
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lettersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  letterButton: {
    backgroundColor: '#7F30FD',
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  letterText: {
    color: '#fff',
    fontSize: 20,
  },

});

export default SoundScreen;
