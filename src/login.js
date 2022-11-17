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

        </View>
      </Modal>

      <View style={style.ImageLogin}>
        <Image source={require('../images/account.png')} />
      </View>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={style.txtInp}></TextInput>
      <TextInput
        placeholder="Password"
        keyboardType="visible-password"
        style={style.txtInp}></TextInput>

      <TouchableHighlight style={style.Button_SUP} 
        onPress={() => setEstado(true)}>
        <Text style={{textDecorationLine: 'underline', fontSize: 20}}>
          Sign Up
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={style.Button_Login}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{textAlign: 'center', fontSize: 25}}>Login</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Login;
