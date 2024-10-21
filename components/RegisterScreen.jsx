import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Daftarkan akun kamu sekarang!</Text>
        <Text style={styles.subText}>Daftar dan nikmati fiturnya</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail} />
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
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Konfirmasi Kata Sandi"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword} />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
          <Image source={require('../assets/pweye.png')} style={styles.eyeIconImage} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="No Telp"
          value={phone}
          onChangeText={setPhone} />
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('RegisterSuccess')}>
          <Text style={styles.buttonTextPrimary}>Daftar</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Sudah memiliki akun?{' '}
          <Text style={styles.registerLink} onPress={() => navigation.navigate('Login')}>
            Masuk!
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
    paddingTop: 70,
    },
    textContainer: {
      alignItems: 'flex-start',
      width: '85%',
      marginBottom: 50,
    },
    welcomeText: {
      fontSize: 20,
      fontFamily: 'libre-franklin-bold',
    },
    subText: {
      fontSize: 16,
      color: '#999',
      fontFamily: 'libre-franklin',
    },
    inputContainer: {
      width: '85%',
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
      fontFamily: 'libre-franklin',
    },
    eyeIconImage: {
      right: 2,
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    buttonPrimary: {
      backgroundColor: '#E8505B',
      borderRadius: 25,
      padding: 15,
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
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

export default RegisterScreen;
