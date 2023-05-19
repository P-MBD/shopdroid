import React from 'react'
import { View, StyleSheet } from 'react-native'
import Content from '../components/login_page/content'
import My_Header from '../components/header/my_header'

let props ={
    head_name:'Login',
    head_page_name:'ورود'
}

const Login = ()=>{
    return(
        <View style={{backgroundColor:'#f3f3f3',}}>
                  <My_Header {...props} />
               <Content />
        </View>

    )
}

export default React.memo(Login)