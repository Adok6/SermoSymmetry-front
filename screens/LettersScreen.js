import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const jsonData = [
  {
    "letter": "ж",
    "syllables": "жа, жа-жу, жа-жу-жа"
  },
  {
    "letter": "з",
    "syllables": "за, за-зу, за-зу-за"
  },
  // Add the remaining JSON data here
];

const LettersScreen = () => {
  const navigation = useNavigation();
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterPress = (letter) => {
    setSelectedLetter(letter);
    navigation.navigate('Syllables', { syllables: jsonData.find(item => item.letter === letter).syllables });
  };

  return (
    <View>
      <Text>List of Letters:</Text>
      {jsonData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleLetterPress(item.letter)}>
          <Text>{item.letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LettersScreen;