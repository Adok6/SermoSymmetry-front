import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";


 const WelcomeScreen = () => {
  const navigation = useNavigation();
   
  return (

    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo2.png')} // logo.png / logo2.png
        style={styles.backgroundImage}
      />
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={[styles.button, {marginTop: 40}]} onPress= {() => navigation.navigate("RegistrationScreen")}>
        <Text>Регистрация</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress= {() => navigation.navigate("LoginScreen")}>
        <Text>Авторизация</Text>
        </TouchableOpacity>

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    marginTop: '-110%',
    marginTop: -250,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2284C9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default WelcomeScreen