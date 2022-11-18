import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableHighlight,
  Text,
  Modal,
} from 'react-native';
import style from './styles';

function Login({navigation}) {
  const [estado, setEstado] = useState(false);

  return (
    <View style={style.view_login}>
      <Modal visible={estado}>
        <View style={style.view_SU}>
          <Text>Please, put your informations at the bottom!</Text>
          <View style={style.view_TxtInp}>
            <TextInput style={style.TxtInputSU} placeholder="Email"></TextInput>
            <TextInput
              style={style.TxtInputSU}
              placeholder="Password"></TextInput>
            <TextInput
              style={style.TxtInputSU}
              placeholder="Address"></TextInput>
          </View>

          <TouchableHighlight
            style={style.Button_confirm}
            onPress={() => setEstado(false)}>
            <Text style={{textAlign: 'center', fontSize: 30}}>Sign UP</Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <View style={style.ImageLogin}>
        <Image source={require('../images/logo_app.png')} />
      </View>

      <View style={style.viewTextinp}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={style.txtInp}></TextInput>
        <TextInput
          placeholder="Password"
          keyboardType="visible-password"
          style={style.txtInp}></TextInput>
      </View>

      <TouchableHighlight
        style={style.Button_SUP}
        onPress={() => setEstado(true)}>
        <Text
          style={{
            textDecorationLine: 'underline',
            fontSize: 20,
            color: 'white',
          }}>
          Sign Up
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={style.Button_Login}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{textAlign: 'center', fontSize: 25, color: 'black'}}>
          Login
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Login;
