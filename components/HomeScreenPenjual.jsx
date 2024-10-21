import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreenPenjual = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [radius, setRadius] = useState(1); 
  const [vendorLocations, setVendorLocations] = useState([]);
  const [region, setRegion] = useState(null);
  const [activeTab, setActiveTab] = useState('HomePenjual'); 
  const [powerOn, setPowerOn] = useState(true);
  const [promotionVisible, setPromotionVisible] = useState(false);
  const [promotionText, setPromotionText] = useState('');
  const [cartPromotion, setCartPromotion] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      const userLocation = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: radius / 555,
        longitudeDelta: radius / 555,
      };

      setLocation(userLocation);
      setRegion(userLocation);

      const vendorData = [
        { id: 1, latitude: loc.coords.latitude - 0.001, longitude: loc.coords.longitude, image: require('../assets/profile1.png') },
        { id: 2, latitude: loc.coords.latitude, longitude: loc.coords.longitude - 0.001, image: require('../assets/profile2.png') },
        { id: 3, latitude: loc.coords.latitude + 0.001, longitude: loc.coords.longitude, image: require('../assets/profile3.png') },
      ];

      setVendorLocations(vendorData);
    })();
  }, []);

  const onRegionChange = (newRadius) => {
    setRadius(newRadius);
    if (location) {
      const newRegion = {
        ...location,
        latitudeDelta: newRadius / 555, 
        longitudeDelta: newRadius / 555,
      };
      setRegion(newRegion);
    }
  };

  const memoizedRegion = useMemo(() => region, [region]);

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('HomePenjual');
    }, [])
  );

  const togglePower = () => {
    setPowerOn(!powerOn); 
  };

  const handlePromotionSubmit = () => {
    if (promotionText.trim()) {
      setCartPromotion(promotionText);
      setPromotionText('');
      setPromotionVisible(false);
    } else {
      alert('Tolong masukan promosi!');
    }
  };  

  if (!location || !region) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={memoizedRegion}
        showsUserLocation={false}
        customMapStyle={mapStyle} >

        <Marker coordinate={location} title={cartPromotion ? cartPromotion : "You are here"}>
          <View>
            <Image source={require('../assets/gerobakIcon.png')} style={styles.markerImage} />
            {cartPromotion ? ( <Text style={styles.promotionText}>{cartPromotion}</Text> ) : null}
          </View>
        </Marker>

        {powerOn && vendorLocations.map((vendor) => (
          <Marker
            key={vendor.id}
            coordinate={{
              latitude: vendor.latitude,
              longitude: vendor.longitude,
            }}
            title={"Vendor Location"}
            onPress={() => navigation.navigate('Detail')} >
            <Image source={vendor.image} style={styles.vendorImage} />
          </Marker>
        ))}
      </MapView>

      {/* Promotion Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={promotionVisible}
        onRequestClose={() => setPromotionVisible(false)} >
          
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Promosi</Text>
            <TextInput
              style={styles.promotionInput}
              placeholder="Tuliskan Promosimu disini!"
              placeholderTextColor="#C6C6C6" 
              value={promotionText}
              onChangeText={setPromotionText}
              multiline />
            <TouchableOpacity style={styles.okButton} onPress={handlePromotionSubmit}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Top Right Button */}
      <TouchableOpacity style={styles.topRightButton} onPress={togglePower}>
        <Image source={powerOn ? require('../assets/powerOn.png') : require('../assets/powerOff.png')} style={styles.topRightButtonImage} />
      </TouchableOpacity>

      {/* Bottom Right Terompet Button */}
      <TouchableOpacity style={styles.bottomRightButton} onPress={() => setPromotionVisible(true)}>
        <Image source={require('../assets/terompet.png')} style={styles.bottomRightButtonImage} />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('HomePenjual'); setActiveTab('HomePenjual'); }}>
          <Image source={activeTab === 'HomePenjual' ? require('../assets/HomeIconActive.png') : require('../assets/HomeIcon.png')} style={styles.navIconHome} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('Permintaan'); setActiveTab('Permintaan'); }}>
          <Image source={activeTab === 'Request' ? require('../assets/permintaanActiveIcon.png') : require('../assets/permintaanIcon.png')} style={styles.navIconFav} />
          <Text style={styles.navText}>Permintaan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('ProfileScreenPenjual'); ('ProfileScreenPenjual'); }}>
          <Image source={activeTab === 'ProfileScreenPenjual' ? require('../assets/akunAktif.png') : require('../assets/Akun.png')} style={styles.navIconAcc} />
          <Text style={styles.navText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStyle = [
  {
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  vendorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  markerImage: {
    width: 50,
    height: 50,
  },
  promotionText: {
    position: 'absolute',
    top: 50,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  topRightButton: {
    position: 'absolute',
    top: 25,
    right: -10,
    padding: 20,
    borderRadius: 50,
  },
  topRightButtonImage: {
    width: 70,
    height: 70,
  },
  bottomRightButton: {
    position: 'absolute',
    bottom: 35,
    right: -10,
    padding: 40,
    borderRadius: 50,
  },
  bottomRightButtonImage: {
    width: 40,
    height: 40,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300, 
    padding: 20, 
    backgroundColor: '#fff',
    borderRadius: 24, 
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'libre-franklin-bold',
    marginBottom: 15,
    marginLeft: -180,
  },
  promotionInput: {
    width: '100%',
    height: 138,
    backgroundColor: '#fff', 
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top', 
    borderColor: '#C6C6C6',
    borderWidth: 1,
    fontFamily: 'libre-franklin',
  },
  okButton: {
    marginTop: 20,
    backgroundColor: '#E8505B', 
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 37,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'libre-franklin-bold',
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

export default HomeScreenPenjual;
