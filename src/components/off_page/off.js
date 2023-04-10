import React from 'react'
import {StyleSheet,View,Image,Text,Dimensions,Modal} from 'react-native'
import Ripple from 'react-native-material-ripple'
const w= Dimensions.get('window').width;

const Offs= () => {
    return(
        <View style={styles.container}>
          <Ripple style={styles.box}>
            <View style={styles.box_img}>
                <Image
                    style={styles.img}
                    source={{uri:'https://dkstatics-public.digikala.com/digikala-products/112947996.jpg?x-oss-process=image/resize,m_lfit,h_500,w_500/quality,q_80'}}
                
                />
            </View>

            <View style={styles.box_price}>
                <Text style={styles.last_price}>120000</Text>
                <Text style={styles.new_price}>10000</Text>

            </View>
         </Ripple>
        </View>

    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        box:{
            backgroundColor:'#fff',
            width:"93%",
            height:w+3,
            marginTop:20,
        },
        box_img:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            height:'85%'
        },
        img:{
            width:'90%',
            height:'90%'
        },
        box_price:{
            justifyContent:'center',
            alignItems:'center',
            borderTopWidth:1,
            borderTopColor:'#f3f3f3',
            height:'15%'
        },
        last_price:{

        },
        new_price:{
            
        }

    }
)

export default React.memo(Offs);