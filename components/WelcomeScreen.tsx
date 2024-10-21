import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/Gerobak.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Selamat Datang di DagangApp!</Text>
        <Text style={styles.description}>
          Temukan cara baru untuk berbelanja dan berdagang dengan mudah. Kami di sini untuk membantu Anda setiap langkah!
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewUser')} >
          <Text style={styles.buttonText}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 300,
    marginBottom: 0,
  },
  title: {
    fontSize: 23,
    fontFamily: 'libre-franklin-bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'libre-franklin',
  },
  button: {
    backgroundColor: '#E8505B',
    borderRadius: 25,
    padding: 15,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'libre-franklin-bold',
    fontSize: 18,
  },
});

export default WelcomeScreen;
