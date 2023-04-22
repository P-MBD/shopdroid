import React from 'react'
import {ScrollView,View} from 'react-native'
import Slider from '../components/kala_page/slider'
import Sharee from '../components/kala_page/share'
import Buttons from '../components/kala_page/buttons'
import Warranty from '../components/kala_page/warranty'
const Kala = () =>{
    return(
        <ScrollView style={{backgroundColor:'#eee'}}>
        <Slider />
        <Sharee />
        <View style={{marginLeft:20,marginRight:20}}>
            <Buttons />
            <Warranty />
            
        </View>
   </ScrollView>
    )
}

export default React.memo(Kala)