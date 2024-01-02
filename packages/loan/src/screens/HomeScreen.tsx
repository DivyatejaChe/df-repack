import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native-paper';
import {TabsParamList} from '../navigation/TabsNavigator';
import {HomeStackParamList} from '../navigation/HomeNavigator';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  MaterialBottomTabScreenProps<TabsParamList, 'HomeNavigator'>
>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Top-level Section
        </Text>
        <Button
          mode="contained-tonal"
          onPress={() => Alert.alert('Not implemented yet')}>
          See All
        </Button>
      </View>
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Section One
        </Text>
        <Button
          mode="contained-tonal"
          onPress={() => navigation.navigate('Upcoming')}>
          See All
        </Button>
      </View>
      
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Section Two
        </Text>
        <Button
          mode="contained-tonal"
          onPress={() => Alert.alert('Not implemented yet')}>
          See All
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
  cardWidth: {
    width: 270,
  },
});

export default HomeScreen;
