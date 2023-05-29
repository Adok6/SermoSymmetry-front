import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Header from '../headers/HeaderSound';
import { useNavigation } from "@react-navigation/native";

// const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

const jsonData = [
  {
    "letter": "ж",
    "syllables": "жа, жа-жу, жа-жу-жа, жу, жу-жо, жу-жо-жу, жо, жо-жа, жо-жа-жо"
  },
  {
    "letter": "з",
    "syllables": "за, за-зу, за-зу-за, зу, зу-зо, зу-зо-зу, зо, зо-за, зо-за-зо"
  },
   {
    "letter": "ль",
    "syllables": "ля, ля-лю, ля-лю-ля, лю, лю-ли, лю-ли-лю, ли, ли-ля,ли-ля-ли "
  },
  {
    "letter": "л",
    "syllables": "ла, ла-лу, ла-лу-ла, лу, лу-ло, лу-ло-лу, ло, ло-ла, ло-ла-ло"
  },
   {
    "letter": "рь",
    "syllables": "ря, ря-рю, ря-рю-ря, рю, рю-ри, рю-ри-рю, ри, ри-ря, ри-р-ри"
  },
  {
    "letter": "р",
    "syllables": "ра, ра-ру, ра-ру-ра, ру, ру-ро, ру-ро-ру, ро, ро-ра, ро-ра-ро"
  },
   {
    "letter": "с",
    "syllables": "са, са-су, са-су-са, су, су-со, су-со-су, со, со-са, со-св-со"
  },
  {
    "letter": "ц",
    "syllables": "ца, ца-цу, ца-цу-ца, цу, цу-цо, цу-цо-цу, цо, цо-ца, цо-ца-цо"
  },
   {
    "letter": "ч",
    "syllables": "ча, ча-чу, ча-чу-ча, чу, чу-чо, чу-чо-чу, чо, чо-ча, чо-ча-чо"
  },
   {
    "letter": "ш",
    "syllables": "ша, ша-шу, ша-шу-ша, шу, шу-шо, шу-шо-шу, шо, шо-ша, шо-ша-шо"
  },
   {
    "letter": "щ",
    "syllables": "ща, ща-щу, ща-щу-ща, щу, щу-що, щу-що-щу, що, що-ща, що-ща-що"
  },
 
];

const SoundScreen = () => {

  const [selectedLetter, setSelectedLetter] = useState(null);
  const navigation = useNavigation();
//   let sound = null;

//   const playSound = async (letter) => {
//   if (sound !== null) {
//     // If sound is already playing, stop it
//     await sound.stopAsync();
//     sound = null;
//     return;
//   }

//   let soundObject = null;
  
//   switch (letter) {
//     case 'А':
//       soundObject = require('../assets/rusAlph/А.mp3');
//       break;
//     case 'Б':
//       soundObject = require('../assets/rusAlph/А.mp3'); // make another sound for future dev
//       break;
//     // Add cases for other letters
//     default:
//       console.log('Invalid letter');
//       return;
//   }
  
//   const { sound: newSound } = await Audio.Sound.createAsync(soundObject);
//   sound = newSound;
//   await sound.playAsync();
// };



const handleLetterPress = (letter) => {
  setSelectedLetter(letter);
  navigation.navigate('SyllablesScreen', { syllables: jsonData.find(item => item.letter === letter).syllables });
};

  return (
    <View style={styles.container}>
    <Header/>
    <Text style={styles.subtitle}></Text>
      <View style={styles.lettersContainer}>
        {jsonData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.letterButton}
            // onPress={() => playSound(letter)}
            // onPress={() => navigation.navigate("SyllablesScreen")}
            onPress={() => handleLetterPress(item.letter)}
          >
            <Text style={styles.letterText}>{item.letter}</Text>
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
