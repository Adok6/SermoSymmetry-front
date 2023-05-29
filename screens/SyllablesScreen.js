import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SyllablesScreen = ({ route }) => {
  const { syllables } = route.params;
  const syllableArray = syllables.split(', ');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Syllables:</Text>
      {syllableArray.map((syllable, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.syllable}>{syllable}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    marginBottom: 8,
  },
  syllable: {
    fontSize: 16,
  },
});

export default SyllablesScreen;