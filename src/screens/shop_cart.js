import React from 'react'
import {ScrollView} from 'react-native'
import Shop_box from '../components/cart_page/shop_box'

const Shop_cart=()=>{
    return(
<ScrollView style={{backgroundColor:'#f3f3f3',}}>
        <Shop_box />
</ScrollView>
    )
}



export default React.memo(Shop_cart)