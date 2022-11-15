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

const ButtonSUP =() =>{
    return(
        <TouchableHighlight style={style.Button_SUP}>
            <Text style={{textDecorationLine:'underline',fontSize: 20}}>
                Sign Up
            </Text>
        </TouchableHighlight>
    )
}

export default ButtonLogin
export {ButtonSUP}