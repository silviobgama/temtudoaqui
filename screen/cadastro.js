import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { CheckBox, Icon, Input, Text } from 'react-native-elements';
import styles from '../style/mainStyle';
import validadorEmail from 'validator';
import { TextInputMask } from 'react-native-masked-text';
import { usuarioService } from '../services/UsuarioService';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [placa, setPlaca] = useState(null)
    const [senha, setSenha] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [erroEmail, setErroEmail] = useState(null)
    const [erroNome, setErroNome] = useState(null)
    const [erroCpf, setErroCpf] = useState(null)
    const [erroTelefone, setErroTelefone] = useState(null)
    const [erroPlaca, setErroPlaca] = useState(null)
    const [erroSenha, setErroSenha] = useState(null)
    const [isLoading, setLoading] = useState(false)

    let cpfField = null
    let telefoneField = null
    let placaField = null

    const validar = () => {
        let erro = false
        if ((email == null) || (email == "")) {
            setErroEmail('Preencha seu e-mail')
            erro = true
        } else {
            if (validadorEmail.isEmail(email)) {
                setErroEmail(null)
            } else {
                setErroEmail('Preencha seu e-mail corretamente')
                erro = true
            }
        }
        if ((nome == null) || (nome == "")) {
            setErroNome('Preencha seu nome')
            erro = true
        }
        if ((cpf == null) || (cpf == "")) {
            setErroCpf('Preencha seu cpf')
            erro = true
        } else {
            if (cpfField.isValid()) {
                setErroCpf(null)
            } else {
                setErroCpf('Preencha seu CPF corretamente')
                erro = true
            }
        }
        if ((telefone == null) || (telefone == "")) {
            setErroTelefone('Preencha seu telefone')
            erro = true
        } else {
            if (telefoneField.isValid()) {
                setErroTelefone(null)
            } else {
                setErroTelefone('Preencha seu telefone corretamente')
                erro = true
            }
        }
        if ((placa == null) || (placa == "")) {
            setErroPlaca('Preencha sua placa')
            erro = true
        } else {
            if (placaField.isValid()) {
                setErroPlaca(null)
            } else {
                setErroPlaca('Preencha sua placa corretamente')
                erro = true
            }
        }
        if ((senha == null) || (senha == "")) {
            setErroSenha('Preencha sua senha')
            erro = true
        }
        // if (isSelected == false) {
        //     alert('Marque o Aceite para continuar')
        //     erro = true
        // }
        return !erro
    }

    const salvar = () => {
        // if (validar()) {
            setLoading(true)

            let data = {
                email: email,
                nome: nome,
                telefone: telefone,
                placa: placa,
                cpf: cpf,
                senha: senha
            }

            
            console.log(data)
             usuarioService.cadastrar(data)
            //     .then((response) => {
            //         setLoading(false)
            //         console.log(response.data)
            //     })
            //     .catch((error) => {
            //         setLoading(false)
            //         console.log(error)
            //         console.log("Deu Erro")
            //     })

        // }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container} >
            <ScrollView style={{ width: '100%', padding: 5, marginLeft: 30 }}
                keyboardVerticalOffset={80}
            >

                <Text h4 style={{ marginBottom: 30 }}>Cadastro</Text>
                <View style={styles.inputText}>
                    <Input
                        placeholder='email'
                        keyboardType='email-address'
                        onChangeText={value => { setEmail(value), setErroEmail(null) }}
                        errorMessage={erroEmail}
                    />
                    <Input
                        placeholder='nome'
                        onChangeText={value => { setNome(value), setErroNome(null) }}
                        errorMessage={erroNome}
                    />
                    <View style={styles.conainerMasked}>
                        <TextInputMask
                            style={styles.maskedInput}
                            placeholder="cpf"
                            type={'cpf'}
                            value={cpf}
                            onChangeText={value => {
                                setCpf(value)
                                setErroCpf(null)
                            }}
                            placeholderTextColor='#999'
                            keyboardType="number-pad"
                            returnKeyType="done"
                            ref={(ref) => cpfField = ref}
                        />
                    </View>
                    <Text style={styles.erroMessage}>{erroCpf}</Text>
                    <View style={styles.conainerMasked}>
                        <TextInputMask
                            style={styles.maskedInput}
                            placeholder="telefone"
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99)'
                            }}
                            value={telefone}
                            onChangeText={value => {
                                setTelefone(value)
                                setErroTelefone(null)
                            }}
                            placeholderTextColor='#999'
                            keyboardType='phone-pad'
                            returnKeyType="done"
                            ref={(ref) => telefoneField = ref}
                        />
                    </View>
                    <Text style={styles.erroMessage}>{erroTelefone}</Text>
                    <View style={styles.conainerMasked}>
                        <TextInputMask
                            style={styles.maskedInput}
                            placeholder="placa"
                            type={'custom'}
                            options={{
                                mask: 'AAA-9999',
                                //validator é onde o isValid pega a validação
                                validator: function (val, settings) {
                                    if (val.length == 8) {
                                        return true
                                    } else {
                                        return false
                                    }
                                }
                            }}
                            value={placa}
                            onChangeText={value => {
                                setPlaca(value)
                                setErroPlaca(null)
                            }}
                            placeholderTextColor='#999'
                            keyboardType='name-phone-pad'
                            returnKeyType="done"
                            ref={(ref) => placaField = ref}
                        />
                    </View>
                    <Text style={styles.erroMessage}>{erroPlaca}</Text>
                    <Input
                        placeholder='senha'
                        keyboardType='default'
                        onChangeText={value => { setSenha(value), setErroSenha(null) }}
                        errorMessage={erroSenha}
                        secureTextEntry={true}
                    />

                    <CheckBox
                        title={"Eu aceito os termos de uso"}
                        checkedIcon="check"
                        uncheckedIcon="square-o"
                        checkedColor="green"
                        uncheckedColor='red'
                        checked={isSelected}
                        onPress={() => setSelected(!isSelected)}
                    />
                    <Button
                        // icon={
                        //     <Icon
                        //         name="arrow-right"
                        //         size={20}
                        //         color="white"
                        //     />}
                        title="Salvar"
                        buttonStyle={styles.btnLogin}
                        onPress={() => salvar()}
                    />
                    {/* {isLoading &&
                        <Text>Carregando...</Text>
                    }
                    {!isLoading &&
                        <Button
                            icon={
                                <Icon
                                    name="arrow-right"
                                    size={20}
                                    color="white"
                                />}
                            title="Salvar"
                            buttonStyle={styles.btnLogin}
                            onPress={() => salvar()}
                        />
                    } */}
                </View>
                <StatusBar style="auto" />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}



