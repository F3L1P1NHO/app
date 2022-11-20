import {StyleSheet} from "react-native";
import { create } from "react-test-renderer";
import React from "react";

const style = StyleSheet.create({
    
    view_login:{
        flexGrow: 1,
        backgroundColor: '#1C1C1C',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ImageLogin:{
        alignItems: 'flex-start'
    },
    viewTextinp:{
        width: '80%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    txtInp:{
        width: '80%',
        height: '35%',
        borderRadius: 30,
        backgroundColor: 'white',
        marginTop: '5%'
    },
    Button_Login:{
        width: '70%',
        height: '8%',
        borderRadius: 30,
        backgroundColor: 'yellow',
        marginTop: '6%',
        justifyContent: 'center',
        marginBottom: '30%'
    },
    Button_SUP:{
        marginTop: '5%'
    },
    view_home:{
        flexGrow: 1,
        backgroundColor: '#1C1C1C',
        justifyContent: 'flex-start',
        alignItems: 'space-between'
    },
    
    view_SU:{
        flexGrow: 1,
        backgroundColor: '#1C1C1C',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    view_TxtInp:{
        width: '90%',
        height: '40%',
        backgroundColor: '#070090',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 6,
        borderRadius: 20
    },
    TxtInputSU:{
        width: '70%',
        height: '15%',
        borderRadius: 15,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    Button_confirm:{
        borderRadius: 30,
        borderWidth: 2,
        width: '55%',
        height: '10%',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    TxtInp_search:{
        width: '60%',
        height: '35%',
        borderRadius: 15,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    Button_search:{
        borderRadius: 30,
        borderWidth: 2,
        width: '30%',
        height: '30%',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    view_search:{
        flexDirection: 'row',
        height:'20%',
        width:'100%',
        marginTop:'10%',
        
        justifyContent:'space-around',
        alignItems: 'center'
    
    }

    
})

export default style