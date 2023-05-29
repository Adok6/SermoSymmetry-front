import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from '../http';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');


  const handleRegister = () => {
    if (firstName === '') {
      setNameError('Введите своё имя');
    } else {
      setNameError('');
    }
    if (lastName === '') {
      setNameError('Введите своё фамилие');
    } else {
      setNameError('');
    }
    if (email === '') {
      setEmailError('Введите свою электронную почту');
    }
     else if (!isValidEmail(email)) {
      setEmailError('Формат почты недействителен');
    }
     else {
      setEmailError('');
    }
    if (password === '') {
      setPasswordError('Введите свой пароль');
    } else if (password.length < 5) {
      setPasswordError('Пароль должен быть не менее 6 символов');
    } else {
      setPasswordError('');
    }
    if (confirmPassword === '') {
      setConfirmPasswordError('Подтвердите свой пароль');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Пароли не совпадают');
    } else {
      setConfirmPasswordError('');
    }

    const values = {
      firstName,
      lastName,
      email,
      password
    }
    if (firstName !== '' && isValidEmail(email)  && password.length >= 6 && password === confirmPassword) {
      axios.post( API_URL+'/auth/signup', values).then((response) => {
      if (response)
        console.log(response.data);
        AsyncStorage.setItem("user", JSON.stringify(response.data))
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
      <Text style={styles.title}>Регистрация</Text>
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={firstName}
        onChangeText={setfirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Фамилия"
        value={lastName}
        onChangeText={setLastName}
      />
      
      {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
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
      <TextInput
        style={styles.input}
        placeholder="Подтверждение пароля"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Регистрация</Text>
      </TouchableOpacity>

      <View style={{marginTop: 10}}>
          <Text style={[{fontSize: 16}]}>
            Уже есть аккаунт?
          </Text>
          
          <Button
            title="Войти"
            onPress={() => navigation.navigate("LoginScreen")}
          />
      </View>
      
    </View>
  );
};

export default RegistrationScreen;

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
    paddingHorizontal: 1,
    marginBottom: 16,
    padding: 8,
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
    
