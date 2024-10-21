import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const NewUserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Gerobak2.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonTextPrimary}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonTextSecondary}>Daftar</Text>
        </TouchableOpacity>
        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.separator}>Atau</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => alert('Google Sign-In')}>
            <Image source={require('../assets/google.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Other Sign-In')}>
            <Image source={require('../assets/OtherIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
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
    marginBottom: 70,
  },
  textContainer: {
    alignItems: 'center',
    width: '80%',
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
  buttonSecondary: {
    borderColor: '#E8505B',
    borderWidth: 2,
    borderRadius: 25,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonTextSecondary: {
    color: '#E8505B',
    fontSize: 18,
    fontFamily: 'libre-franklin-bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,

  },
  separator: {
    fontSize: 12,
    color: '#999',
    marginHorizontal: 15,
    fontFamily: 'libre-franklin',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8505B',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default NewUserScreen;
