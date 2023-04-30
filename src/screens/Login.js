import React from 'react'
import { View, StyleSheet } from 'react-native'
import Content from '../components/login_page/content'

const Login = ()=>{
    return(

        <View style={{backgroundColor:'#f3f3f3',}}>
               <Content />
        </View>

    )
}

export default React.memo(Login)