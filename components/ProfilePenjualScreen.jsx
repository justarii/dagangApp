import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { Ionicons } from '@expo/vector-icons'; 

const ProfilePenjualScreen = ( {navigation} ) => {
  const [businessName, setBusinessName] = useState(''); 
  const [isEditingName, setIsEditingName] = useState(false); 
  const [businessType, setBusinessType] = useState('Makanan'); 
  const [selectedDays, setSelectedDays] = useState([]); 
  const [description, setDescription] = useState(''); 

  const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil Penjual</Text>
      </View>
      <Text style={styles.label}>Nama Dagangan</Text>
      <View style={styles.inputContainer}>
        {isEditingName ? (
          <TextInput
            style={styles.input}
            value={businessName}
            onChangeText={setBusinessName}
            onBlur={() => setIsEditingName(false)}
            placeholder="Nama Dagangan" />
        ) : (
          <TouchableOpacity style={styles.nameDisplay} onPress={() => setIsEditingName(true)}>
            <Text style={styles.nameText}>{businessName || 'Klik untuk isi nama dagangan'}</Text>
            <Ionicons name="create-outline" size={20} color="#E8505B" />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.label}>Jenis Dagangan</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={businessType}
          onValueChange={(itemValue) => setBusinessType(itemValue)}
          style={styles.picker} >
          <Picker.Item label="Makanan" value="Makanan" />
          <Picker.Item label="Minuman" value="Minuman" />
        </Picker>
      </View>

      <Text style={styles.label}>Hari Buka</Text>
      <View style={styles.daysContainer}>
        {days.map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              selectedDays.includes(day) && styles.selectedDayButton,
            ]}
            onPress={() => toggleDay(day)} >
            <Text
              style={[
                styles.dayText,
                selectedDays.includes(day) && styles.selectedDayText,
              ]} >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Deskripsi Text</Text>
      <View style={styles.descriptionContainer}>
        <TextInput
          style={styles.descriptionInput}
          value={description}
          onChangeText={setDescription}
          placeholder="Tambahkan deskripsi dagangan"
          multiline={true}
          numberOfLines={4}
        />
      </View>
      
      <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Menu yang dijual</Text>
          <Image source={require('../assets/profile/arrow-right-pink.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('ProfileScreenPenjual')}>
        <Text style={styles.submitButtonText}>Daftar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 60,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'libre-franklin-bold',
  },
  label: {
    fontSize: 16,
    fontFamily: 'libre-franklin-bold',
    marginBottom: 10,
    marginTop: 45,
  },
  inputContainer: {
    marginBottom: -20,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#E8505B',
    fontSize: 16,
    padding: 8,
    fontFamily: 'libre-franklin',
  },
  nameDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#E8505B',
  },
  nameText: {
    fontSize: 16,
    fontFamily: 'libre-franklin',
  },
  dropdownContainer: {
    borderWidth: 2,
    borderColor: '#E8505B',
    borderRadius: 5,
    marginBottom: -20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: -20,
  },
  dayButton: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedDayButton: {
    backgroundColor: '#E8505B',
    borderColor: '#E8505B',
  },
  dayText: {
    color: 'black',
    fontFamily: 'libre-franklin',
  },
  selectedDayText: {
    color: 'white',
  },
  descriptionContainer: {
    borderWidth: 2,
    borderColor: '#E8505B',
    borderRadius: 5,
    marginBottom: 20,
  },
  descriptionInput: {
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    fontFamily: 'libre-franklin',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#E8505B',
    marginTop: -15,
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'libre-franklin-bold',
  },
  submitButton: {
    backgroundColor: '#E8505B',
    padding: 15,
    borderRadius: 37,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'libre-franklin',
  },
});

export default ProfilePenjualScreen;
