import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Slider from '@react-native-community/slider';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [radius, setRadius] = useState(1); 
  const [textPosition, setTextPosition] = useState(100); 
  const [vendorLocations, setVendorLocations] = useState([]);
  const [region, setRegion] = useState(null);
  const [activeTab, setActiveTab] = useState('Home'); 

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
        { id: 1, latitude: loc.coords.latitude - 0.001, longitude: loc.coords.longitude },
        { id: 2, latitude: loc.coords.latitude, longitude: loc.coords.longitude - 0.001 },
        { id: 3, latitude: loc.coords.latitude + 0.001, longitude: loc.coords.longitude },
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

    const minY = 100;
    const maxY = 0;
    const newTextPosition = minY - ((newRadius - -2) / 9) * (minY - maxY);

    setTextPosition(newTextPosition);
  };

  const memoizedRegion = useMemo(() => region, [region]);

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Home');
    }, [])
  );

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
        initialRegion={memoizedRegion}
        region={memoizedRegion}
        showsUserLocation={false}
        customMapStyle={mapStyle} >
        <Marker coordinate={location} title={"You are here"}>
          <Image source={require('../assets/Marker.png')} style={styles.markerImage}/>
        </Marker>

        {vendorLocations.map((vendor) => (
          <Marker
            key={vendor.id}
            coordinate={{
              latitude: vendor.latitude,
              longitude: vendor.longitude,
            }}
            title={vendor.title}
            onPress={() => navigation.navigate('Detail')} >
            <Image source={require('../assets/gerobakIcon.png')} style={styles.vendorImage}/>
          </Marker>
        ))}
      </MapView>

      {/* Radius Slider */}
      <View style={styles.radiusContainer}>
        <View style={[styles.radiusTextContainer, { top: textPosition }]}>
          <Text style={styles.radiusText}>{radius} Km</Text>
        </View>
        <Slider
          style={{ width: 130, height: 25, transform: [{ rotate: '270deg' }]}}
          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor="#f04b48"
          maximumTrackTintColor="#ddd"
          step={1}
          value={radius}
          onValueChange={(value) => onRegionChange(value)}
        />
      </View>

      {/* Top Right Button */}
      <TouchableOpacity style={styles.topRightButton} onPress={() => navigation.navigate('FavoriteIsi')}>
        <Image source={require('../assets/favtopright.png')} style={styles.topRightButtonImage} />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('Home'); setActiveTab('Home'); }}>
          <Image source={activeTab === 'Home' ? require('../assets/HomeIconActive.png') : require('../assets/HomeIcon.png')} style={styles.navIconHome} />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => { navigation.navigate('Favorite'); setActiveTab('Favorite'); }}>
          <Image source={activeTab === 'Favorite' ? require('../assets/FavoriteIconActive.png') : require('../assets/favoriteicon.png')} style={styles.navIconFav} />
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
  markerImage: {
    width: 47.92,
    height: 53,
  },
  vendorImage: {
    width: 26,
    height: 26,
  },
  radiusContainer: {
    position: 'absolute',
    bottom: 100,
    right: -30,
    padding: 20,
    borderRadius: 50,
  },
  radiusTextContainer: {
    position: 'absolute',
    left: 32, 
  },
  radiusText: {
    fontSize: 16,
    color: '#333',
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
});

export default HomeScreen;
