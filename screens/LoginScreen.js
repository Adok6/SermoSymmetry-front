import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { API_URL } from '../http';

import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
    const navigation = useNavigation();

    const [user, setUser] = useState(null)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');



 
    const handleLogin =  async () => {
    if (email === '') {
        setEmailError('Введите свою электронную почту');
    } else if (!isValidEmail(email)) {
        setEmailError('Формат почты недействителен');
    } else {
        setEmailError('');
    }
    if (password === '') {
        setPasswordError('Введите свой пароль');
    } else if (password.length < 5) {
        setPasswordError('Пароль должен быть не менее 6 символов');
    } else {
        setPasswordError('');
    }

      const values = {
        email,
        password
      }
    if (isValidEmail(email) && password.length >= 6) {
      await axios.post(API_URL+'/auth/signin', values).then((response) => {
      if (response)
        console.log(response.data);
        AsyncStorage.setItem("user", JSON.stringify(response.data))
        setUser(response.data)
        
        navigation.navigate("HomeScreen")
      });
      return;
    }
  };


  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Логин</Text>
      <TextInput
        style={styles.input}
        placeholder="Электронная почта"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Логин</Text>
      </TouchableOpacity>

      <View style={{marginTop: 10}}>
          <Text style={{textAlign: 'center', fontSize: 16}}>
            Нет аккаунта?
          </Text>
          
          <Button
            title="Регистрация"
            onPress={() => navigation.navigate("RegistrationScreen")}
          />
      </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2284C9',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
