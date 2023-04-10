import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Offs from '../components/off_page/off'

const Off = ()=>{
    return(

        <ScrollView style={{backgroundColor:'#f3f3f3',}}>
                <Offs />
        </ScrollView>

    )
}

export default React.memo(Off)