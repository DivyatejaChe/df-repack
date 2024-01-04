import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, MD3Colors, Text} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';

const SignInScreen = () => {
  const {signIn} = useAuth();

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.welcomeHeadline}>
        Welcome!
      </Text>
      <Text style={styles.welcomeText} variant="bodyLarge">
        Tap Login to enter
      </Text>
      <Button mode="contained" onPress={signIn}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeHeadline: {
    color: MD3Colors.primary10,
  },
  welcomeText: {
    padding: 16,
    paddingBottom: 32,
  },
});

export default SignInScreen;
