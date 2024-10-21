import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const PermintaanScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Permintaan');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('PermintaanIsi');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Permintaan'); 
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Permintaan</Text>
      <View style={styles.content}>
        <Image source={require('../assets/permintaan0.png')} style={styles.icon} resizeMode="contain" />
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomePenjual')}>
          <Image source={require('../assets/HomeIcon.png')} style={styles.navIconHome} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton} onPress={() => { navigation.navigate('Permintaan'); setActiveTab('Permintaan'); }}>
          <Image source={activeTab === 'Permintaan' ? require('../assets/permintaanActiveIcon.png') : require('../assets/permintaanIcon.png')} style={styles.navIconFav} />
          <Text style={styles.navText}>Permintaan</Text>
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
    fontFamily: 'libre-franklin-bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 190.15,
    height: 166.15,
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
    width: 15,
    height: 20,
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

export default PermintaanScreen;
