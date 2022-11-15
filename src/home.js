import React from 'react';
import {View,Text} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
import style from './styles';

function Home() {
  return (
    <View style={[style.view_home]}>
      <View style={[style.optionContainer,{}]}>
        <View style={[style.home_containers]}><Text>1</Text></View>
        <View style={style.home_containers}><Text>2</Text></View>
      </View>

      <View style={[style.optionContainer,{marginTop: '20%'}]}>
        <View style={[style.home_containers]}><Text>1</Text></View>
        <View style={style.home_containers}><Text>2</Text></View>
      </View>

      <View style={[style.optionContainer,{marginTop: '20%'}]}>
        <View style={[style.home_containers]}><Text>1</Text></View>
        <View style={style.home_containers}><Text>2</Text></View>
      </View>

    </View>
  );
}

export default Home;
