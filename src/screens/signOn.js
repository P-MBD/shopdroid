import React from 'react'
import { View, StyleSheet } from 'react-native'
import Content from '../components/signOn_page/content'

const SignOn = ()=>{
    return(

        <View style={{backgroundColor:'#f3f3f3',}}>
               <Content />
        </View>

    )
}

export default React.memo(SignOn)