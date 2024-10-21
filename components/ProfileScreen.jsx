import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('ProfileScreen');

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('ProfileScreen');
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>

      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image source={require('../assets/profile/profile-picture.png')} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.profileName}>Supratman</Text>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Ubah Peran</Text>
          <Image source={require('../assets/profile/arrow-right.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Ganti Password</Text>
          <Image source={require('../assets/profile/arrow-right.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutRow} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutText}>Log Out</Text>
          <Image source={require('../assets/profile/logout.png')} style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('Home'); setActiveTab('Home'); }} >
          <Image source={activeTab === 'Home' ? require('../assets/HomeIconActive.png') : require('../assets/HomeIcon.png')} style={styles.navIconHome} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('FavoriteIsi'); setActiveTab('FavoriteIsi'); }} >
          <Image source={activeTab === 'FavoriteIsi' ? require('../assets/FavoriteIconActive.png') : require('../assets/favoriteicon.png')} style={styles.navIconFav} />
          <Text style={styles.navText}>Favorit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('ProfileScreen'); setActiveTab('ProfileScreen'); }} >
          <Image source={activeTab === 'ProfileScreen' ? require('../assets/akunAktif.png') : require('../assets/Akun.png')} style={styles.navIconAcc} />
          <Text style={styles.navText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 60,
    marginLeft: 20,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'libre-franklin-bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 116,
    height: 116,
  },
  profileName: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
    fontFamily: 'libre-franklin-bold',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'libre-franklin',
  },
  logoutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
    fontFamily: 'libre-franklin',
  },
  logoutIcon: {
    width: 20,
    height: 20,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
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
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});

export default ProfileScreen;
