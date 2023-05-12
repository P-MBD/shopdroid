import React, { Component } from 'react'
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base'
import Content from '../components/category_page/content';
const Category=(prpos)=>{ 
    return (
      <Container>
     <Tabs  renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Tab1">
              <Content />
          </Tab>
          <Tab heading="Tab2">
            
          </Tab>
          <Tab heading="Tab3">
          
          </Tab>
          <Tab heading="Tab1">
           
           </Tab>
           <Tab heading="Tab2">
             
           </Tab>
           <Tab heading="Tab3">
           
           </Tab>
           <Tab heading="Tab1">
           
           </Tab>
           <Tab heading="Tab2">
             
           </Tab>
           <Tab heading="Tab3">
           
           </Tab>
        </Tabs>
      </Container>
        );
     }

export default React.memo(Category)