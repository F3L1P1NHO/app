import React from 'react';
import {TextInput, View, Image, TouchableHighlight, Text} from 'react-native';
import style from './styles';

function Login({navigation}) {
  return (
    <View style={style.view_login}>
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

      <TouchableHighlight style={style.Button_SUP}>
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
