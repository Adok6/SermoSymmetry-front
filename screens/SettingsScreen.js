import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../headers/HeaderSettings';

function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <View style={styles.option}>
        <Text style={styles.optionText}>Уведомления</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Вкл</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Язык</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Русский</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Статус</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Онлайн</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Выйти</Text>
      </TouchableOpacity>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 5,
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  buttonText: {
    fontSize: 16,
  },
  logoutButton: {
    margin: 16,
    paddingVertical: 16,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
