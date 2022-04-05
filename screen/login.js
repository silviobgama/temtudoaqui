import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styles from '../style/mainStyle';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';
import Principal from './principal';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = ()=>{
    navigation.reset({
        index:0,
        routes: [{name:"Principal"}]
    })
  }

  return (
    <View style={styles.container} >
      <Text h4 style={{marginBottom:30}}>Área de Login</Text>
      
      <View style={styles.inputText}>
      <Input      
        placeholder='email'
        keyboardType='email-address'
        leftIcon={{ type: 'font-awesome', name: 'envelope', size:20 }}
        onChangeText={value => { setEmail(value) }}
      />
      <Input
        placeholder='senha'
        secureTextEntry={true}
        leftIcon={{ type: 'font-awesome', name: 'lock', size:30 }}
        onChangeText={value => { setPassword(value) }}
      />
      </View>
      
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={20}
            color="white"
          />
        }
        title="Entrar"
        onPress={()=>entrar()}
      />
      <StatusBar style="auto" />
    </View>
  );
}


