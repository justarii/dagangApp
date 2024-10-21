import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreenPenjual = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('ProfileScreenPenjual');

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('ProfileScreenPenjual');
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>

      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image source={require('../assets/profile/profile-picture-penjual.png')} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.profileName}>Cilok Mang Ujang</Text>
        <Text style={styles.promosi}>Cilok Mang Ujang</Text>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Ubah Peran</Text>
          <Image source={require('../assets/profile/arrow-right.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={() => navigation.navigate('ProfilePenjualScreen')}>
          <Text style={styles.optionText}>Atur Profile Penjual</Text>
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
      <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('HomePenjual'); setActiveTab('HomePenjual'); }} >
          <Image source={activeTab === 'HomePenjual' ? require('../assets/HomeIconActive.png') : require('../assets/HomeIcon.png')} style={styles.navIconHome} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('PermintaanIsi'); setActiveTab('Permintaan'); }}>
          <Image source={activeTab === 'Permintaan' ? require('../assets/permintaanActiveIcon.png') : require('../assets/permintaanIcon.png')} style={styles.navIconPermintaan} />
          <Text style={styles.navText}>Permintaan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('ProfileScreenPenjual');  setActiveTab('ProfileScreenPenjual'); }}>
          <Image source={activeTab === 'ProfileScreenPenjual' ? require('../assets/akunAktif.png') : require('../assets/Akun.png')} style={styles.navIconAcc} />
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
  promosi: {
    marginTop: -5,
    marginBottom: 20,
    color: "#A6A6A6",
    fontFamily: 'libre-franklin',
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

export default ProfileScreenPenjual;
