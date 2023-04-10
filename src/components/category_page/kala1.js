import React, { memo } from 'react'
import {View,Text,StyleSheet,FlatList, Image, Dimensions} from 'react-native'
import { cat_item } from '../../data/dataArray'
const w = Dimensions.get('window').width;
const KalaOne = () => {
    
    return(
        <View>
            <View style={styles.head}>
                <Text style={styles.head_left}>
                    پیشنهاد ما به شما
                </Text>
                
            </View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={cat_item}
                renderItem={({item,index})=>
                    <View style={styles.flatlist_style}>
                        <Image  
                        style={styles.img}
                        source={{uri:item.img}}
                        />

                        <View style={styles.view_name}>
                            <Text style={styles.text_name}>
                                {item.name}
                            </Text>
                        </View>

                        <View style={styles.view_price}>
                            <Text style={styles.text_price}>
                                {item.price}
                            </Text>
                        </View>


                    </View>
                    
                }
            
            />
        </View>
    )
}

const styles= StyleSheet.create({
    head:{
        flex:1,
        padding: 10
    },
    head_left:{
        color:'#0052cc',
        fontSize:16
    },
    head_right:{
        fontSize:18,
        fontWeight:'bold'
    },
    flatlist_style:{
        backgroundColor:'#fff',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        width:w/3,
        height:w/2.6,
        marginLeft:5,
        marginRight:10,
        marginBottom:8,
        borderRadius:10

    },
    img:{
        width:'90%',
        height:'60%',
        resizeMode:'cover'

    },
    view_name:{
        marginTop:15,
        padding:5,
    },
    text_name:{
        fontSize:16
    },
    view_price:{
        borderTopWidth:0.5,
        padding:5
    },
    text_price:{
        color:'green'
    }

})

export default React.memo(KalaOne)