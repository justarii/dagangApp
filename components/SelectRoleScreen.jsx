import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SelectRoleScreen({ navigation }) {
  const [selectedRole, setSelectedRole] = useState('Pembeli');

  const handlePress = () => {
    if (selectedRole === 'Pembeli'){
      navigation.navigate('Home');
    } else if (selectedRole === 'Penjual'){
      navigation.navigate('HomePenjual')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      </View>
      <View style={styles.footer}>
        <View style={styles.dropdownContainer}>
          <Picker selectedValue={selectedRole} style={styles.picker} onValueChange={(itemValue) => setSelectedRole(itemValue)} >
            <Picker.Item style={styles.itemPicker} label="Pembeli" value="Pembeli" />
            <Picker.Item style={styles.itemPicker} label="Penjual" value="Penjual" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  dropdownContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#E8505B',
    borderRadius: 25,
    marginBottom: 20,
    overflow: 'hidden', 
  },
  picker: {
    height: 50,
    width: '100%',
  },
  itemPicker: {
    color: '#E8505B',
  },
  button: {
    backgroundColor: '#E8505B',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'libre-franklin-bold',
  },
});
