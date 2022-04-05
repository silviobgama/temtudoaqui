import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styles from './style/mainStyle';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screen/login';
import Principal from './screen/principal';
import Cadastro from './screen/cadastro';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
 
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


