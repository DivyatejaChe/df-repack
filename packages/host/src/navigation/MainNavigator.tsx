import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Transactions from '../screens/Transaction';
import TabsNavigator from './TabsNavigator';
import CardsScreen from '../screens/CardsScreen';

export type MainStackParamList = {
  Tabs: undefined;
  Transactions: undefined;
  Cards: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Tabs" component={TabsNavigator} />
      <Main.Screen name="Transactions" component={Transactions} />
      <Main.Screen name="Cards" component={CardsScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
