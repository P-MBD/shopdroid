import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { Container, Header, Tab, Tabs, ScrollableTab, Content} from 'native-base'
import My_Header from '../components/header/my_header'
import My_Footer from '../components/footer/my_footer'
import Send_Co from '../components/add_component_page/send_co'
import Rait_sq from '../components/common/rait_sq'
const props= {
    head_name:'Cat', 
    name_page: 'نظرات کاربران',
}
const Add_Comment =()=>{ 
    return (
      <Container style={{backgroundColor:'#ddd'}}>
        <My_Header {...props} /> 
         <Content style={{padding:5}}>
             <Text style={styles.reting_text}>امتیاز شما به این محصول</Text>
             <View style={styles.reting_view}>
                    <Rait_sq />
            </View> 
            <Send_Co />
         </Content>
        <My_Footer name={'ثبت نقد و برسی'}/>

      </Container>
        );
     }

  const styles = StyleSheet.create({
    reting_text:{
      fontSize:13,
      fontFamily:'IRANSansMobile_Light',
      color:'#666',
      marginTop:10,
      marginBottom:15,
    },
    reting_view:{
      backgroundColor:'#fff',
      padding:5,
      marginRight:5,
      marginLeft:5,
    }
  })
export default React.memo(Add_Comment)