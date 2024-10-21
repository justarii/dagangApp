import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function RegisterSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Image source={require('../assets/Success.png')} style={styles.image} />
        <Text style={styles.title}>Yuhuu Pendaftaranmu Berhasil!</Text>
        <Text style={styles.subtitle}>
          Pendaftaran Anda telah berhasil dilakukan. Sekarang Anda dapat menikmati semua fitur dan manfaat yang kami tawarkan.
        </Text>
        <Text style={styles.subtitle}>Selamat menjelajah!</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelectRole')} >
        <Text style={styles.buttonText}>Lanjutkan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 150,
  },
  messageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: -20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'libre-franklin-bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    fontFamily: 'libre-franklin',
  },
  button: {
    backgroundColor: '#E8505B',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'libre-franklin-bold',
  },
});
