import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Content, Container} from 'native-base'
import My_Header from '../components/header/my_header'
import Body from '../components/signOn_page/body'
import My_Footer from '../components/footer/my_footer'
let props={
    head_name:'Login',
    head_page_name:'ثبت نام',
}
const SignOn = ()=>{
    return(

        <Container style={{backgroundColor:'#f3f3f3',}}>
             <My_Header {...props} />
               <Content>
                    <Body />
               </Content>
               <My_Footer  color={'green'} />
               
        </Container>

    )
}

export default React.memo(SignOn)