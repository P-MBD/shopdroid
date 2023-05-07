import React from "react"
import { View } from "react-native"
import Content from '../components/forget_pass_page/content'

const Forget_Pass=()=>{
    return(
            <View style={{backgroundColor:'#f3f3f3'}}>
                <Content/>
            </View>
        )
}

export default React.memo(Forget_Pass)