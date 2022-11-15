
import * as React from 'react'
import { TextInput, View,Image } from "react-native";
import style from './styles';
import ButtonLogin, { ButtonSUP } from './components';

function App() {
  return (
    <View style={style.view_login}>
      <View style={style.ImageLogin}>
        <Image 
          source={require('../images/account.png')}
        />
      </View>
      

      <TextInput placeholder='Email' keyboardType='email-address' style={style.txtInp}>

      </TextInput>
      <TextInput  placeholder='Password' keyboardType='visible-password'style={style.txtInp}>
        
      </TextInput>

      <ButtonSUP/>

      <ButtonLogin/>
    </View>
  )
}

export default App