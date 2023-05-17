import React, { Component } from 'react'
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base'
import Content from '../components/category_page/content';
import { cat_list } from '../data/dataArray';
const Category=(prpos)=>{ 
    return (
      <Container>
     <Tabs  renderTabBar={()=> <ScrollableTab  backgroundColor='#EF394E'/>}>
        {
           cat_list.map((item,key)=>(
            <Tab 
                heading={item.name}
                tabStyle={{backgroundColor:'#EF394E'}}
                activeTabStyle={{backgroundColor:'#EF394E'}}
                textStyle={{color:'#fafafa',fontSize:14}}
                activeTextStyle={{color:'#fff'}}
            >
                <Content />
            </Tab>
        ))

        }
        </Tabs>
      </Container>
        );
     }

export default React.memo(Category)