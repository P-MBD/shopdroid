import React, { Component } from 'react'
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base'
import My_Header from '../components/header/my_header'
import My_Footer from '../components/footer/my_footer'


const props= {
    head_name:'Cat', 
    name_page: 'نظرات کاربران',
}

const Add_Comment =()=>{ 
    return (
      <Container>
        <My_Header {...props} /> 
        <My_Footer name={'ثبت نقد و برسی'}/>

      </Container>
        );
     }

export default React.memo(Add_Comment)