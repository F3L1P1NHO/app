import React from "react";
import { Text, TouchableHighlight, } from "react-native";
import style from "./styles";

const ButtonLogin =() =>{
    return(
        <TouchableHighlight style={style.Button_Login}>
            <Text style={{textAlign: 'center',fontSize: 25}}>
                Login
            </Text>
        </TouchableHighlight>
    )
}

export default ButtonLogin