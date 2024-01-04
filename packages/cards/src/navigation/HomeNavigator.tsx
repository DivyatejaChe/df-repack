import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';

export type HomeStackParamList = {
  Home: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
        title: 'Cards',
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
