import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Selamat datang kembali!</Text>
        <Text style={styles.subText}>Ayo masuk dan nikmati fiturnya</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Gerobak3.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername} />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Kata Sandi"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword} />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Image source={require('../assets/pweye.png')} style={styles.eyeIconImage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => alert('Lupa Kata Sandi?')} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Lupa Kata sandi?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonTextPrimary}>Masuk</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Belum memiliki akun?{' '}
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
            Daftar sekarang!
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '80%',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 23,
    fontFamily: 'libre-franklin-bold',
  },
  subText: {
    fontSize: 16,
    color: '#999',
    fontFamily: 'libre-franklin',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#E8505B',
    width: '100%',
    marginBottom: 20,
    padding: 10,
    fontFamily: 'libre-franklin',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E8505B',
    marginBottom: 20,
    width: '100%',
  },
  inputPassword: {
    flex: 1,
    padding: 10,
  },
  eyeIconImage: {
    right: 5,
    width: 20, 
    height: 20, 
    resizeMode: 'contain', 
    bottom: -1,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#E8505B',
    fontFamily: 'libre-franklin-bold',
  },
  buttonPrimary: {
    backgroundColor: '#E8505B',
    borderRadius: 25,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonTextPrimary: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'libre-franklin-bold',
  },
  registerText: {
    color: '#999',
    fontFamily: 'libre-franklin',
  },
  registerLink: {
    color: '#E8505B',
    fontFamily: 'libre-franklin-bold',
  },
});

export default LoginScreen;
