import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4G19gD_EFM0Av32HStFL9kuuJghUjpCQ",
  authDomain: "instaclone-20590.firebaseapp.com",
  projectId: "instaclone-20590",
  storageBucket: "instaclone-20590.appspot.com",
  messagingSenderId: "213569126678",
  appId: "1:213569126678:web:f71605699c894fc9b99037",
  measurementId: "G-HMHV2Y1GEW"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
