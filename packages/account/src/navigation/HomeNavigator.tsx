import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import AccountList from '../screens/AccountList';

export type HomeStackParamList = {
  Home: undefined;
  Upcoming: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
        title: 'Booking',
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Upcoming" component={AccountList} />
    </Home.Navigator>
  );
};

export default HomeNavigator;