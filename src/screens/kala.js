import React from 'react'
import {ScrollView,View} from 'react-native'
import Slider from '../components/kala_page/slider'
import Sharee from '../components/kala_page/share'
import Buttons from '../components/kala_page/buttons'
import Warranty from '../components/kala_page/warranty'
import Disc from '../components/kala_page/disc'
import Rating from '../components/kala_page/rating'
import Cat from '../components/kala_page/cat'
import Pro_similar from '../components/kala_page/pro_similar'
import Pro_other_by from '../components/kala_page/pro_other_by'
import My_Header from '../components/header/my_header'


const Kala = ({route}) =>{
    const { head_page_name } = route?.params || {};
    let props={
        head_name:'Main',
        head_page_name:head_page_name,
        right_btn:'back',
    }

    return(
        <ScrollView style={{backgroundColor:'#eee'}}>
            <My_Header {...props} /> 
        <Slider />
        <Sharee />
        <View style={{marginLeft:20,marginRight:20}}>
            <Buttons />
            <Warranty />
            <Disc />
            <Rating />
         </View>
            <Cat />
            <Pro_similar />
            <Pro_other_by />
            
      
   </ScrollView>
    )
}

export default React.memo(Kala)