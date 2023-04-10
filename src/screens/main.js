import React from 'react'
import {ScrollView} from 'react-native'
import Slider from '../components/main_page/slider';
import Cat from '../components/main_page/cat'
import Offer from '../components/main_page/offer';
import Off from '../components/main_page/off';
import kala1 from '../components/main_page/kala1';
import Kala1 from '../components/main_page/kala1';
import kala2 from '../components/main_page/kala2';
import Kala2 from '../components/main_page/kala2';
const Main = () => {
    return (
     <ScrollView style={{backgroundColor:'#f3f3f3',}}>
         <Slider />
         <Cat />
         <Offer />
         <Off />
         <Kala1/>
         <Kala2 />

     </ScrollView>
    );
  };

export default Main;

