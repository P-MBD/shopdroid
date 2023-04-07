import React from 'react'
import {View,TouchableWithoutFeedback,Image,StyleSheet} from 'react-native'
import Swiper from 'react-native-swiper'
import { swiper_list } from '../../data/dataArray'

const Slider=()=>{

    return(
        <View style={styles.container}>

<Swiper autoplay={true}>
                {
                    swiper_list.map((item,key)=>(
                        <TouchableWithoutFeedback style={styles.btn} key={key}>
                            <Image 
                                style={styles.img}
                                source={{uri:item.img}}
                            />
                        </TouchableWithoutFeedback>
                    ))
                }
            </Swiper>

        </View>

    )

}

const styles= StyleSheet.create({
    container:{
        height:200
    },
    btn:{
        flex:1
    },
    img:{
        width:'100%',
        height:'100%'
    }
})

export default React.memo(Slider);