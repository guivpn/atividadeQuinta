
import { StyleSheet, Text, TextInput, TouchableOpacity, View , useState} from 'react-native';
import senhaValidar from '../src/utils/senhaValidar.js'
import React, { useState } from 'react';


export default function LoginScreen(){

    const [senha, setSenha] = useState('')
    const [errors, setErrors] = useState([])

    const submit = () => {
      const result = senhaValidar(senha);
      setErrors(result.errors);

      if (result.isValid) {
      Alert.alert('Sucesso', 'Senha válida! Acesso permitido.');
    }
    }

  return(
    <View style={styles.container}>
      <Text style={styles.txtHome}>Validador de Senha</Text>

      <Text style={styles.label}>Senha:</Text>
      <TextInput
      style={styles.input}
      secureTextEntry
      placeholder='Insira sua Senha!'
      value={senha}
      onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.btn} onPress={senhaValidar}>
        <Text style={styles.txtBtn}>Validar</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems:'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop:50
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  errorContainer: {
    marginTop: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
  },
  txtHome:{
    fontSize:20,
    marginTop:-300,
    alignItems:'center',

  },
  btn:{
    marginTop:20,
    backgroundColor:"red",
    width:'50%',
    height:'5%',
    borderRadius:8
  },
  txtBtn:{
    textAlign:'center',
    padding:8,
    fontWeight:'bold',
    fontSize:15
  }
});

