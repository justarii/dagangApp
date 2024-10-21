import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Slider from '@react-native-community/slider'; 
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';

const FavoriteScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Favorite');

  useEffect(() => {
    const timer = setTimeout(() => {navigation.replace('FavoriteIsi');}, 1000);

  
    return () => clearTimeout(timer);

    useFocusEffect(
      React.useCallback(() => {
        setActiveTab('Favorite'); 
      }, [])
    );
  }, [navigation]);
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Favorit</Text>
      <View style={styles.container}>
      <Image source={require('../assets/favLove.png')} style={styles.icon}/>
    </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/HomeIcon.png')} style={styles.navIconHome} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('Favorite'); setActiveTab('Favorite'); }}>
          <Image source={activeTab === 'Favorite' ? require('../assets/FavoriteIconActive.png') : require('../assets/favoriteicon.png')} style= {styles.navIconFav} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('NewUser')}>
          <Image source={require('../assets/Akun.png')} style={styles.navIconAcc} />
          <Text style={styles.navText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 60,
    left: 20,
    fontSize: 24,
    fontFamily: 'libre-franklin-bold'
  },
  icon: {
    width: 211,
    height: 129.98,
    marginBottom: 20,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconHome: {
    width: 15.2,
    height: 18.12,
  },
  navIconFav: {
    width: 20,
    height: 17,
  },
  navIconAcc: {
    width: 15.5,
    height: 16.98,
  },
  navText: {
    fontSize: 12,
    color: '#E8505B',
    bottom: -5,
    fontFamily: 'Poppins-Regular',
  },
});

export default FavoriteScreen;