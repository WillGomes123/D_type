import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Screens/Home';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import Login from './src/components/Screens/Login';
import Register from './src/components/Screens/Register';
import Input from './src/components/Screens/Input';
import ChangeWord from './src/components/Screens/ChangeWord';
import {  Routes } from './src/components/Routes';
import Data from './src/components/Screens/Data';

SplashScreen.preventAutoHideAsync();



export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'NotoSans_Bold': require('./src/Fonts/NotoSans-Bold.ttf'),
    'NotoSans_semi': require('./src/Fonts/NotoSans-SemiBold.ttf'),
    'NotoSans_italic': require('./src/Fonts/NotoSans-ExtraLight.ttf')

  });
  
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  
  return (
    <View style={{flex:1}} onLayout={onLayoutRootView}>
      <Routes />
    </View>
   
    );
}


