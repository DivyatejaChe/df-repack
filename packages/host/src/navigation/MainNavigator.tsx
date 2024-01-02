import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountsScreen from '../screens/AccountsScreen';
import TabsNavigator from './TabsNavigator';
import LoanScreen from '../screens/LoanScreen';

export type MainStackParamList = {
  Tabs: undefined;
  Booking: undefined;
  Shopping: undefined;
  News: undefined;
  Dashboard: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Tabs" component={TabsNavigator} />
      <Main.Screen name="Accounts" component={AccountsScreen} />
      <Main.Screen name="Loans" component={LoanScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
