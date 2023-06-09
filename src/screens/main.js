import React from 'react'
import {ScrollView} from 'react-native'
import My_Header from '../components/header/my_header';
import Slider from '../components/main_page/slider';
import Cat from '../components/main_page/cat'
import Offer from '../components/main_page/offer';
import Off from '../components/main_page/off';
import kala1 from '../components/main_page/kala1';
import Kala1 from '../components/main_page/kala1';
import kala2 from '../components/main_page/kala2';
import Kala2 from '../components/main_page/kala2';
import Amazing_Auggestion from '../components/main_page/amazing_suggestion'


const Main = () => {
    return (
     <ScrollView style={{backgroundColor:'#f3f3f3',}}>
         <My_Header head_name={'Main'}/>
         <Slider />
         <Cat />
         <Amazing_Auggestion />
         <Off />
         <Offer />
         <Kala1/>
         <Kala2 />

     </ScrollView>
    );
  };

export default Main;

