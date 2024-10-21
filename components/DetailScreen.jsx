import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const productDetails = {
  id: '1',
  name: 'Cilok Mang Ujang',
  category: 'Makanan',
  image: require('../assets/favImage/Detail/detailCilok.png'),
  status: 'Buka Setiap Hari',
  description: 'Nikmati kelezatan cilok kami yang lezat dan kenyal! Cilok, camilan khas Bandung ini terbuat dari campuran tepung tapioka berkualitas yang dipadukan dengan bumbu spesial, menghasilkan bola-bola kenyal yang menggugah selera.',
  menu: [
    { id: '1', name: 'Cilok Normal', price: 'Rp 5.000', image: require('../assets/favImage/Detail/cilokN.png') },
    { id: '2', name: 'Cilok Sosis', price: 'Rp 12.000', image: require('../assets/favImage/Detail/cilokS.png') },
    { id: '3', name: 'Cilok Kriuk', price: 'Rp 7.000', image: require('../assets/favImage/Detail/cilokK.png') },
    { id: '4', name: 'Cilok Kuah', price: 'Rp 10.000', image: require('../assets/favImage/Detail/cilokKu.png') },
    { id: '5', name: 'Cilok Tahu', price: 'Rp 10.000', image: require('../assets/favImage/Detail/cilokT.png') },
  ],
};

const DetailScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/favImage/Detail/back-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.titleText}>Detail Dagangan</Text>
      </View>
      <View style={styles.header}>
        <Image source={productDetails.image} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{productDetails.name}</Text>
          <Text style={styles.productCategory}>{productDetails.category}</Text>
          <Text style={styles.productStatus}>{productDetails.status}</Text>
        </View>
        <Image source={require('../assets/favImage/lonceng.png')} style={styles.bellIcon} />
      </View>
      <Text style={styles.productDescription}>{productDetails.description}</Text>
      <View style={styles.separator} />
      <FlatList
        data={productDetails.menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={item.image} style={styles.menuImage} />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text style={styles.menuPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 0,
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 30,
  },
  backButton: {
    paddingRight: 10,
    top: 2,
  },
  backIcon: {
    width: 14.88,
    height: 11,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'libre-franklin-bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  productImage: {
    width: 72,
    height: 72,
    borderRadius: 35,
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 18,
    bottom: 5,
    fontFamily: 'libre-franklin-bold',
  },
  productCategory: {
    fontSize: 14,
    color: '#777',
    fontFamily: 'libre-franklin'
  },
  productStatus: {
    fontSize: 12,
    color: '#1CFF33',
    top: 6,
    fontFamily: 'libre-franklin-bold',
  },
  bellIcon: {
    width: 48,
    height: 48,
  },
  productDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    fontFamily: 'libre-franklin',
  },
  separator: {
    height: 2,
    backgroundColor: '#ddd',
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
  },
  menuImage: {
    width: 48,
    height: 48,
    borderRadius: 16,
  },
  menuTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  menuName: {
    fontSize: 16,
    bottom: 5,
    fontFamily: 'libre-franklin',
  },
  menuPrice: {
    fontSize: 14,
    color: '#000000',
    top: 6,
    fontFamily: 'libre-franklin',
  },
});

export default DetailScreen;
