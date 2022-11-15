import {StyleSheet} from "react-native";
import { create } from "react-test-renderer";
import React from "react";

const style = StyleSheet.create({
    view_login:{
        flexGrow: 1,
        backgroundColor: '#1C1C1C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtInp:{
        width: '70%',
        height: '7%',
        borderRadius: 30,
        backgroundColor: 'white',
        marginTop: 15
    },
    Button_Login:{
        width: '70%',
        height: '8%',
        borderRadius: 30,
        backgroundColor: 'lightblue',
        marginTop: '20%',
        justifyContent: 'center'
    }
})

export default style