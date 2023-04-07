import React from 'react'
import {ScrollView} from 'react-native'
import Slider from '../components/main_page/slider';
import Cat from '../components/main_page/cat'
import Offer from '../components/main_page/offer';
import Off from '../components/main_page/off';

const Main = () => {
    return (
     <ScrollView>
         <Slider />
         <Cat />
         <Offer />
         <Off />

     </ScrollView>
    );
  };

export default Main;

