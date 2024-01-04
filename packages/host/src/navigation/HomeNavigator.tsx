import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import TransactionsScreen from '../screens/TransactionsScreen';

export type HomeStackParamList = {
  Home: undefined;
  Transactions: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Transactions" component={TransactionsScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
