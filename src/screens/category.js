import React from 'react'
import { ScrollView } from 'react-native'
import KalaOne from '../components/category_page/kala1'
import KalaTwo from '../components/category_page/kala2'
import KalaThree from '../components/category_page/kala3'

const Category=()=>{
    return(
        <ScrollView style={{backgroundColor:'#f3f3f3',}}>
            <KalaOne />
            <KalaTwo />
            <KalaThree />

        </ScrollView>
    )
}


export default React.memo(Category)