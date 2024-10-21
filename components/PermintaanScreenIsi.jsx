import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const permintaanData = [
  { id: '2', name: 'Ningsih Suloyo', address: 'Jl. Durian Raya Dalam', image: require('../assets/permintaan/Ningsih.png') },
  { id: '3', name: 'Brian Halim', address: 'musholla Nurul Adam bodong city', image: require('../assets/permintaan/Brian.png') },
  { id: '4', name: 'Lilis', address: 'Jl. Durian XIII', image: require('../assets/permintaan/Lilis.png') },
];

const PermintaanScreenIsi = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Permintaan');

  const renderPermintaanItem = ({ item }) => (
    <TouchableOpacity style={styles.permintaanItem} onPress={() => console.log(`Pressed on ${item.name}`)}>
      <Image source={item.image} style={styles.permintaanImage} />
      <View style={styles.permintaanTextContainer}>
        <Text style={styles.permintaanName}>{item.name}</Text>
        <Text style={styles.permintaanAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Permintaan'); 
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Permintaan</Text>
      <FlatList 
        data={permintaanData}
        renderItem={renderPermintaanItem}
        keyExtractor={item => item.id}
        style={styles.permintaanList}
      />
      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('HomePenjual'); setActiveTab('HomePenjual'); }} >
          <Image source={activeTab === 'HomePenjual' ? require('../assets/HomeIconActive.png') : require('../assets/HomeIcon.png')} style={styles.navIconHome} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('PermintaanIsi'); setActiveTab('Permintaan'); }} >
          <Image source={activeTab === 'Permintaan' ? require('../assets/permintaanActiveIcon.png') : require('../assets/permintaanIcon.png')} 
            style={styles.navIconPermintaan} />
          <Text style={styles.navText}>Permintaan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('ProfileScreenPenjual'); setActiveTab('ProfileScreenPenjual'); }} >
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
    alignItems: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 60,
    left: 20,
    fontSize: 24,
    fontFamily: 'libre-franklin-bold',
  },
  permintaanList: {
    marginTop: 110,
    width: '100%',
  },
  permintaanItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  permintaanImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  permintaanTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  permintaanName: {
    fontSize: 16,
    bottom: 6,
    fontFamily: 'libre-franklin-bold',
  },
  permintaanAddress: {
    fontSize: 12,
    color: '#C6C6C6',
    top: 4,
    fontFamily: 'libre-franklin',
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
  navIconPermintaan: {
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
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});

export default PermintaanScreenIsi;
