import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Offs from '../components/off_page/off'
import My_Header from '../components/header/my_header'

let props={
    head_name:'Main',
    head_page_name:'شارژر همراه',
    right_btn:'back',
}

const Off = ()=>{
    return(

        <ScrollView style={{backgroundColor:'#f3f3f3',}}>
           <My_Header {...props} /> 
           <Offs />
        </ScrollView>

    )
}

export default React.memo(Off)