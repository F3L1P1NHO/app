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
    ImageLogin:{
        marginBottom: '5%'
    },
    txtInp:{
        width: '70%',
        height: '7%',
        borderRadius: 30,
        backgroundColor: 'white',
        marginTop: '5%'
    },
    Button_Login:{
        width: '70%',
        height: '8%',
        borderRadius: 30,
        backgroundColor: 'lightblue',
        marginTop: '15%',
        justifyContent: 'center'
    },
    Button_SUP:{
        marginTop: '5%'
    },
    view_home:{
        flexGrow: 1,
        backgroundColor: 'purple',
    },
    home_containers:{
        width: '35%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    optionContainer:{
        flexDirection: 'row',
        height:'15%',
        backgroundColor: 'red',
        marginTop: '25%',
        justifyContent: 'space-around'
    },
    view_SU:{
        flexGrow: 1,
        backgroundColor: 'gray',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    view_TxtInp:{
        width: '100%',
        height: '40%',
        backgroundColor: 'red',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    TxtInputSU:{
        width: '70%',
        height: '15%',
        borderRadius: 20,
        borderWidth: 2
    },
    Button_confirm:{
        borderRadius: 30,
        borderWidth: 2,
        width: '55%',
        height: '10%',
        justifyContent: 'center'
    }

    
})

export default style