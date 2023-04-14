import React from 'react'
import {StyleSheet,View,Image,Text,Dimensions,Modal} from 'react-native'
import Ripple from 'react-native-material-ripple'
import {off_data} from '../../data/dataArray'
import off from '../main_page/off';
const w= Dimensions.get('window').width;

const Offs= () => {
    return(
        off_data.map((item,key)=>(
            <View style={styles.container}>
            <Ripple style={styles.box}>
              <View style={styles.box_img}>
                  <Image
                      style={styles.img}
                      source={{uri:item.img}}
                  
                  />
              </View>
  
              <View style={styles.box_price}>
                  <Text style={styles.last_price}>تومان {item.l_price}</Text>
                  <Text style={styles.new_price}> تومان {item.n_price}</Text>
  
              </View>
           </Ripple>
          </View>
  
        ))
      
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
            color:'red',
            fontSize:17
        },
        new_price:{
            color:'#1F1',
            fontSize:17     
        }

    }
)

export default React.memo(Offs);