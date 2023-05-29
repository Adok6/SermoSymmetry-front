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
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  row: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8,
  },
  syllable: {
    fontSize: 16,
    color: '#666666',
  },
});

export default SyllablesScreen;