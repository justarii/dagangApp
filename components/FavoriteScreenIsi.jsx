import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const favorites = [
  { id: '1', name: 'Cilok Mang Ujang', category: 'Makanan', image: require('../assets/favImage/cilok.png'), active: true },
  { id: '2', name: 'Bakso Jos', category: 'Makanan', image: require('../assets/favImage/bakso.png'), active: true },
  { id: '3', name: 'Es Dawet Ayu', category: 'Minuman', image: require('../assets/favImage/dawet.png'), active: false },
  { id: '4', name: 'Es Capcin', category: 'Minuman', image: require('../assets/favImage/capcin.png'), active: true },
  { id: '5', name: 'Cilor Wati', category: 'Makanan', image: require('../assets/favImage/cilor.png'), active: false },
];

const FavoriteScreenIsi = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('FavoriteIsi');

  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity style={styles.favoriteItem} onPress={() => navigation.navigate('Detail', { itemId: item.id })}>
      <Image source={item.image} style={styles.favoriteImage} />
      <View style={styles.favoriteTextContainer}>
        <Text style={styles.favoriteName}>{item.name}</Text>
        <Text style={styles.favoriteCategory}>{item.category}</Text>
      </View>
      <Image source={item.active ? require('../assets/favImage/lonceng.png') : require('../assets/favImage/noLonceng.png')} style={styles.favoriteBellIcon} 
      />
    </TouchableOpacity>
  );

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('FavoriteIsi');
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Favorit</Text>
      <FlatList 
        data={favorites}
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
        style={styles.favoriteList}
      />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('Home'); setActiveTab('Home'); }}>
          <Image source={activeTab === 'Home' ? require('../assets/HomeIconActive.png') : require('../assets/HomeIcon.png')} style={styles.navIconHome} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('FavoriteIsi'); setActiveTab('FavoriteIsi'); }}>
          <Image source={activeTab === 'FavoriteIsi' ? require('../assets/FavoriteIconActive.png') : require('../assets/favoriteicon.png')} style={styles.navIconFav} />
          <Text style={styles.navText}>Favorit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('ProfileScreen'); setActiveTab('Account'); }}>
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
  favoriteList: {
    marginTop: 120,
    width: '100%',
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  favoriteImage: {
    width: 48,
    height: 48,
    borderRadius: 25,
  },
  favoriteTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  favoriteName: {
    fontSize: 16,
    bottom: 6,
    fontFamily: 'libre-franklin-bold',
  },
  favoriteCategory: {
    fontSize: 12,
    color: '#C6C6C6',
    top: 4,
    fontFamily: 'libre-franklin',
  },
  favoriteBellIcon: {
    width: 43,
    height: 43,
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
    elevation: 5
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

export default FavoriteScreenIsi;
