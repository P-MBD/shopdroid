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
const Kala = () =>{
    return(
        <ScrollView style={{backgroundColor:'#eee'}}>
        <Slider />
        <Sharee />
        <View style={{marginLeft:20,marginRight:20}}>
            <Buttons />
            <Warranty />
            <Disc />
            <Rating />
            <Cat />
            <Pro_similar />
            <Pro_other_by />
            
        </View>
   </ScrollView>
    )
}

export default React.memo(Kala)