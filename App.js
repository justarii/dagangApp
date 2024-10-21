
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';
import NewUserScreen from './components/NewUserScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import RegisterSuccessScreen from './components/RegisterSuccess';
import SelectRoleScreen from './components/SelectRoleScreen';
import FavoriteScreen from './components/FavoriteScreen';
import FavoriteScreenIsi from './components/FavoriteScreenIsi';
import DetailScreen from './components/DetailScreen';
import HomeScreenPenjual from './components/HomeScreenPenjual';
import PermintaanScreen from './components/PermintaanScreen';
import PermintaanScreenIsi from './components/PermintaanScreenIsi';
import ProfileScreen from './components/ProfileScreen';
import ProfileScreenPenjual from './components/ProfileScreenPenjual';
import ProfilePenjualScreen from './components/ProfilePenjualScreen';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'libre-franklin': require('./assets/fonts/static/LibreFranklin-Regular.ttf'),
    'libre-franklin-bold': require('./assets/fonts/static/LibreFranklin-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NewUser" component={NewUserScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccessScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SelectRole" component={SelectRoleScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Favorite" component={FavoriteScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="FavoriteIsi" component={FavoriteScreenIsi} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomePenjual" component={HomeScreenPenjual} options={{ headerShown: false }}/>
        <Stack.Screen name="Permintaan" component={PermintaanScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="PermintaanIsi" component={PermintaanScreenIsi} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileScreenPenjual" component={ProfileScreenPenjual} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfilePenjualScreen" component={ProfilePenjualScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}