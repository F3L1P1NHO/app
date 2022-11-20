import React from 'react';
import {View, Text, TextInput,TouchableHighlight,Image} from 'react-native';


import {back} from 'react-native/Libraries/Animated/Easing';
import style from './styles';

function Home() {
  return (
    <View style={[style.view_home]}>
      <View style={{width:'30%',height:'20%',justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../images/logo_semfundo.png')}></Image>
      </View>
      
      <View style={style.view_search}>
        <TextInput
          style={style.TxtInp_search}
          placeholder="Type in here"></TextInput>
        <TouchableHighlight style={style.Button_search}>
          <Text style={{textAlign: 'center',color: 'black',fontSize: 20}}>Search</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Home;
