import React,{useState} from 'react'
import {View,StyleSheet,Text,Dimensions,TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple'
import { useNavigation } from '@react-navigation/native';

const w= Dimensions.get('window').width

const Warranty = () =>{
    const {navigate} = useNavigation();
    const [border_color,set_border_color]=useState('black')
    const _changeBorderColor=(color)=>{
        set_border_color(color)
    }
    return(
        <View style={styles.container}>

            <View style={styles.sec1}>
                <View style={styles.sec1_part1}>
                    <Text style={[styles.text_size16,]}> 3 رنگ</Text>
                    <Text style={[styles.text_size16, styles.text_color_gray]}>  رنگ</Text>
                </View>
                <View style={styles.sec1_part2}>
                <TouchableOpacity 
                    style={[styles.sec1_part2_box,border_color==='#fff'?{borderColor:'blue'}:{}]} 
                    onPress={()=>_changeBorderColor('#fff')}
                   >
                       <View style={[styles.sec1_part2_box_color,{backgroundColor:'#fff'}]}/>
                       <Text style={[styles.text_size13,styles.text_color_gray]}>
                           سفید
                       </Text>
                   </TouchableOpacity>
                   <TouchableOpacity 
                    style={[styles.sec1_part2_box,border_color==='#f00'?{borderColor:'blue'}:{}]}
                    onPress={()=>_changeBorderColor('#f00')}
                   >
                       <View style={[styles.sec1_part2_box_color,{backgroundColor:'#f00'}]}/>
                       <Text style={[styles.text_size13,styles.text_color_gray]}>
                           قرمز
                       </Text>
                   </TouchableOpacity>
                   <TouchableOpacity 
                    style={[styles.sec1_part2_box,border_color==='#00f'?{borderColor:'blue'}:{}]}
                    onPress={()=>_changeBorderColor('#00f')}
                   >
                       <View style={[styles.sec1_part2_box_color,{backgroundColor:'#00f'}]}/>
                       <Text style={[styles.text_size13,styles.text_color_gray]}>
                           آبی
                       </Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.sec1_part3}>
                    <Text style={[styles.text_size13, styles.text_color_lightGray]}>گارانتی 18 ماه </Text>
                    <MaterialCommunityIcons name='shield-check'   style={styles.icon_ml} />
                </View>
            </View>

            <View style={[styles.sec2,styles.border_top]}>
                <View style={[styles.sec2_part,{marginBottom:10}]}>
                    <Text style={[styles.text_size13, styles.text_color_gray]}>فروش توسط دیجی کالا رضایت خرید : % 83</Text>
                    <MaterialCommunityIcons name='store'   style={styles.icon_ml} />
                </View>
                <View style={styles.sec2_part}>
                    <Text style={[styles.text_size13, styles.text_color_gray]}>
                        آماده ارسال از انبار دیجی کالا
                        <Text style={[styles.text_size13, styles.text_color_black]}> 1 روز آینده</Text>
                        </Text>
                    <MaterialIcons name='local-shipping'  style={styles.icon_ml} />
                </View>
            </View>

            <View style={[styles.sec3,styles.border_top]}>
                <View style={styles.sec3_part1}>
                    <Text style={styles.sec3_text1}>7199000 تومان</Text>
                    <Text style={styles.sec3_text2}>7199000 تومان</Text>
                </View>
                <Ripple style={styles.sec3_btn} onPress={()=>navigate('Shop_cart')}>
                    <Text style={styles.sec3_btn_text}>افزودن به سبد خرید</Text>
                    <MaterialIcons name='add-shopping-cart' color='#fff' style={[styles.icon_ml,styles.text_color_gray]} />
                </Ripple>
            </View>
            <View style={[styles.sec4,styles.border_top]}>
                <View style={styles.sec4_part}>
                        <MaterialIcons name='keyboard-arrow-left' size={22} style={[styles.icon_ml,styles.text_color_lightGray]}/>
                </View>
                <View style={styles.sec4_part}>
                        <Text style={[styles.text_size13, styles.text_color_blue]}> 
                             4 فروشنده و گارانتی برای این کالا وجود دارد
                        </Text>
                        <MaterialCommunityIcons name='store' style={[styles.icon_ml,styles.text_color_gray]}  />
                </View>
            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
         width:null,
         height:null,
         backgroundColor:'#fff',
         padding:5,
         elevation:10,
         marginTop:10
        },
    border_top:{
        borderColor:'#bbb',
        borderTopWidth:0.4
    },
    sec1_part1:{
         flexDirection:'row',
         justifyContent:'space-between'
    },
    sec1_part2:{
        flexDirection:'row',
        justifyContent:'flex-end',
        flexWrap:'wrap'
    },
    sec1_part2_box:{
        width:w/8,
        height:w/8,
        borderColor:"#888",
        borderWidth:0.6,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        marginLeft:5,
        marginRight:5,
    },
    sec1_part2_box_color:{
        width:25,
        height:25,
        borderRadius:100,
        borderColor:"#bbb",
        borderWidth:0.5,
    },
    sec1_part3:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginRight:10
    },
    sec1:{
        paddingBottom:10
    },
    sec2:{
        padding:10,
    },
    sec3:{
        padding:10,
        paddingTop:15
    },
    sec2_part:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    sec3_text1:{
        fontSize:19,
        color:'#5ecf56',
        marginBottom:15,
        marginRight:5,
        alignItems:'flex-start',
        textAlign:'left',
    },
    sec3_text2:{
        fontSize:16,
        color:'red',
       textDecorationLine:'line-through',
       textAlign:'left'
    },
    sec3_btn:{
        width:null,
        height:w/12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5ecf56',
        borderRadius:5,
    },
    sec3_btn_text:{
        fontSize:16,
        color:'#fff',
        fontWeight:'bold'
    },
    sec4:{
        padding:10,
        paddingBottom:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    sec4_part:{
        flexDirection:'row',
        alignItems:'center'
    },
    text_color_black:{
        color:'#000',
    },
    text_color_gray:{
        color:'#666'
    },
    text_color_blue:{
        color:'#57ada6',
    },
    text_size16:{
        fontSize:16,
    },
    text_size14:{
        fontSize:14,
    },
    text_size13:{
        fontSize:13,
    },
    icon_ml:{
        marginLeft:5,
        fontSize:24,
    },
    text_color_lightGray:{
        color:'#bbb'
    },
    sec3_part1:{
        flexDirection:'row'
    }

})

export default React.memo(Warranty)