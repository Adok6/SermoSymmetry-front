import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress= {() => navigation.navigate("HomeScreen")}>
        <Image source={require('../assets/images/home.png')} style={styles.icon} />
        <Text style={styles.text}>Главная</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress= {() => navigation.navigate("AACScreen")}>
        <Image source={require('../assets/images/aac.png')} style={styles.icon} />
        <Text style={styles.text}>AAC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress= {() => navigation.navigate("SettingsScreen")}>
        <Image source={require('../assets/images/settings.png')} style={styles.icon} />
        <Text style={styles.text}>Настройки</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 64,
    paddingHorizontal: 20,
    width: 375,
    marginTop: 25,
  },
  item: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Footer;
