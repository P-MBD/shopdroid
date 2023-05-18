import React from 'react'
import { ScrollView } from 'react-native'
import KalaOne from '../components/about_category_page/kala1'
import KalaTwo from '../components/about_category_page/kala2'
import KalaThree from '../components/about_category_page/kala3'

const AboutCategory=()=>{
    return(
        <ScrollView style={{backgroundColor:'#f3f3f3',}}>
            <KalaOne />
            <KalaTwo />
           

        </ScrollView>
    )
}


export default React.memo(AboutCategory)