import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styles from '../style/mainStyle';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';


import Principal from './principal';
import Cadastro from './principal';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = ()=>{
    navigation.reset({
        index:0,
        routes: [{name:"Principal"}]
    })
  }

  const cadastrar = ()=>{
    navigation.navigate("Cadastro")    
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
        buttonStyle={styles.btnLogin}
        onPress={()=>entrar()}
      />
      <Button
        icon={
          <Icon
          name='user'
          type='font-awesome'          
            size={15}
            color="white"
          />
        }
        buttonStyle={styles.btnLogin}
        title=" Cadastrar"
        onPress={()=>cadastrar()}
      />
      <StatusBar style="auto" />
    </View>
  );
}


