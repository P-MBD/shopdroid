import React from 'react'
import {ScrollView} from 'react-native'
import Slider from '../components/kala_page/slider'
import Sharee from '../components/kala_page/share'
const Kala = () =>{
    return(
        <ScrollView>
            <Slider />
            <Sharee />
        </ScrollView>
    )
}

export default React.memo(Kala)