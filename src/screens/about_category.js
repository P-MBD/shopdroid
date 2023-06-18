import React from 'react'
import { ScrollView } from 'react-native'
import My_Header from '../components/header/my_header'
import KalaOne from '../components/about_category_page/kala1'
import KalaTwo from '../components/about_category_page/kala2'
import KalaThree from '../components/about_category_page/kala3'

const AboutCategory=()=>{
    return(
        <ScrollView style={{backgroundColor:'#f3f3f3',}}>
            <My_Header head_name={'Main'} head_page_name={'تبلت'} />
            <KalaOne />
            <KalaTwo />
           

        </ScrollView>
    )
}


export default React.memo(AboutCategory)