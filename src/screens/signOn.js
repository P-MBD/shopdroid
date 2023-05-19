import React from 'react'
import { View, StyleSheet } from 'react-native'
import My_Header from '../components/header/my_header'
import Content from '../components/signOn_page/content'
let props={
    head_name:'Login',
    head_page_name:'ثبت نام',
}
const SignOn = ()=>{
    return(

        <View style={{backgroundColor:'#f3f3f3',}}>
             <My_Header {...props} />
               <Content />
        </View>

    )
}

export default React.memo(SignOn)