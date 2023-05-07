import React, {useState} from 'react'
import {StyleSheet,View,Image,Text,Dimensions,Modal} from 'react-native'
import Ripple from 'react-native-material-ripple'
import {off_data} from '../../data/dataArray'
import off from '../main_page/off';
import MIcon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/Feather'
import SIcon from 'react-native-vector-icons/SimpleLineIcons'

const w= Dimensions.get('window').width;

const Offs= () => {
    const [change_box_state,setChange_box_state]=useState(1)
    const[change_box_icon, setChange_box_icon]= useState( <FIcon name="grid" style={styles.head_icon} />)
    const _change_box = () =>{
        switch(change_box_state){
            case 1 :
                setChange_box_state(2);
                setChange_box_icon(<SIcon name="list" style={[styles.head_icon,{rotation:180}]} />)
                break;
            case 2:
                setChange_box_state(3);
                setChange_box_icon(<SIcon name="control-pause" style={[styles.head_icon,{rotation:90}]} />)
                break;
            case 3:
                setChange_box_state(1);
                setChange_box_icon(<FIcon name="grid" style={styles.head_icon} />)
        }
    }
    const A_header=()=>{
        return(
            <View style={styles.A_header_top}>
                <Ripple style={[styles.A_header_top_left]} onPress={()=>_change_box()}>
                    {
                        change_box_icon
                    }
                </Ripple>
                <View style={[styles.center,styles.A_header_top_right,styles.border_left_right]}>
                    <View>
                        <Text style={styles.a_header_h3_text} >مرتب سازی</Text>
                        <Text style={styles.a_header_h4_text}>پربازدیدترین</Text>
                    </View>
                    <MIcon name="filter-list" style={styles.head_icon}/>
                </View>
                <View style={[styles.center,styles.A_header_top_right]}>
                    <View>
                        <Text style={styles.a_header_h3_text}>فیلتر کردن</Text>
                        <Text style={styles.a_header_h4_text}>رنگ نوع قیمت و ..</Text>
                    </View>
                    <MIcon name="filter-list" style={styles.head_icon} />
                </View>
            </View>
        )
    }

    const Full= () =>{
        return(
            <View style={full_s.box}>
                <View styles={full_s.sec1}>
                    <View style={full_s.image}>
                      <Image source={require('../../assets/img/full_star.png')} style={full_s.image_box}/>
                    </View>
                
                    <Text style={full_s.pName}>
                        ستاره
                    </Text>
                    <Text style={full_s.eName}>
                        star
                    </Text>
                </View>
             
                <View style={full_s.sec2}>
                    <View >
                        <Text style={full_s.red_p}>
                        1920000 تومان
                        </Text>
                        <Text style={full_s.green_p}>
                        1199000 تومان
                        </Text>
                    </View>
                    <View>
                        <Text style={full_s.s_s_text}>پیشنهاد ویژه</Text>
                    </View>
                </View>
            </View>
        )

       
    }

    const Half =()=>{
        return(
            <View style={half_s.box} >
                <View style={half_s.left}>
                    <View style={half_s.box_name}>
                          <Text style={full_s.pName}>
                        ستاره
                         </Text>
                        <Text style={full_s.eName}>
                        star
                        </Text>
                    </View>
                    
                    <View style={half_s.box_price}>
                        <View>
                             <Text style={full_s.red_p}>
                                1920000 تومان
                            </Text>
                            <Text style={full_s.green_p}>
                                1199000 تومان
                            </Text>
                        </View>
                         <View>
                         <Text style={full_s.s_s_text}>پیشنهاد ویژه</Text>
                       </View>
                    </View>
                </View>
                <View style={half_s.right}>
                <Image source={require('../../assets/img/full_star.png')} style={half_s.image}/>
                </View>
            </View>
        )
    }

    const Two= () =>{
        return(
            <View style={two_s.box}>
                <View styles={two_s.sec1}>
                    <View style={two_s.image}>
                      <Image source={require('../../assets/img/full_star.png')} style={two_s.image_box}/>
                    </View>
                
                    <Text style={two_s.pName}>
                        ستاره
                    </Text>
                </View>
             
                <View style={two_s.sec2}>
                    <View  style={two_s.box_price}>
                        <Text style={two_s.red_p}>
                        1920000 تومان
                        </Text>
                        <Text style={full_s.green_p}>
                        1199000 تومان
                        </Text>
                    </View>
                    <View>
                        <Text style={two_s.s_s_text}>پیشنهاد ویژه</Text>
                    </View>
                </View>
            </View>
        )

       
    }

    return(
        
            <View style={styles.container}>
                <A_header />
                <View style={{margin:8, flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                    {
                        change_box_state===1?
                            <Full />
                            :
                                 change_box_state===2?
                                    <Two />
                                    :
                                      <Half />
                    }
                    
                </View>
             
          </View>
  
      
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#f1f1f1'
        },
        A_header_top:{
            width:'100%',
            height:w/10,
            flexDirection:'row',
            elevation:4,
            top:0,
            backgroundColor:'#fff'
        },
        center:{
            alignItems:'center',
            justifyContent:'center',
            height:'100%',
        },
        A_header_top_left:{
            height:'100%',
            width:'10%',
            alignItems:'center',
            justifyContent:'center',
            left:-4
        },
        A_header_top_right:{
            width:'45%',
            flexDirection:'row',
        },
        border_left_right:{
            borderLeftWidth:0.4,
            borderRightWidth:0.4,
            borderColor:'#666'
        },
        head_icon:{
            fontSize:24,
            color:'#666',
            marginLeft:8
        },
        a_header_h3_text:{
            fontSize:14,
            color:'#666',
            textAlign:'center',
        },
        a_header_h4_text:{
            fontSize:12,
            color:'#999',
            textAlign:'center',
        },

    }
)

const full_s = StyleSheet.create({
    box:{
        width:'98%',
        height:w/1.2,
        backgroundColor:'#fff',
        elevation:3,
        borderRadius:3,
        marginBottom:8
    },
    sec1:{
        padding:10,
        width:'100%',
        height:'80%'
    },
    pName:{
        fontSize:14,
        color:'#111',
        marginBottom:10,
        marginTop:30,
    },
    eName:{
        fontSize:15,
        color:'#777',
        marginBottom:30,
        textAlign:'right',

    },
    image_box:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,  
    },
    image:{
        width:'60%',
        height:'60%',
        resizeMode:'contain',
    },
    sec2:{
        width:'100%',
        height:'25%',
        borderTopWidth:.5,
        borderColor:'#d1d1d1',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    red_p:{
        color:'red',
        textDecorationLine: 'line-through',
        fontSize:17,
        margin:5,
    },
    green_p:{
        color:'#5ecf56',
        fontSize:17,
        margin:5,
    } ,
    s_s_text:{
        fontSize:13,
        color:'#f4f4f4',
        padding:3,
        backgroundColor:'red',
        borderRadius:3,
        margin:5,
    }
    
})

const half_s = StyleSheet.create({
    box:{
        width:null,
        height:w/2.2,
        backgroundColor:'#fff',
        marginBottom:8,
        elevation:3,
        borderRadius:3,
        flexDirection:'row'
    },
    left:{
        height:'100%',
        width:'70%',
    },
   right:{
    height:'100%',
    width:'30%',
},
box_price:{
    width:'100%',
    height:'30%',
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopWidth:.5,
    borderColor:'#d1d1d1'
},
box_name:{
    width:'100%',
    height:'70%',
},
image:{
    width:'95%',
    height:'80%',
    resizeMode:'contain'
}

})

const two_s = StyleSheet.create({
    box:{
        width:'49%',
        height:w/2.2,
        backgroundColor:'#fff',
        elevation:3,
        borderRadius:3,
        marginBottom:8
    },
    sec1:{
        padding:10,
        width:'100%',
        height:'70%'
    },
    pName:{
        fontSize:14,
        color:'#111',
        marginBottom:15,
        marginTop:10,
    },
    image_box:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,  
    },
    image:{
        width:'70%',
        height:'70%',
        resizeMode:'contain',
    },
    sec2:{
        width:'100%',
        height:'25%',
        borderTopWidth:.5,
        borderColor:'#d1d1d1',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    box_price:{
        paddingLeft:6
    },
    red_p:{
        color:'red',
        textDecorationLine: 'line-through',
        fontSize:12,
        margin:5,
    },
    green_p:{
        color:'#5ecf56',
        fontSize:13,
        margin:5,
    } ,
    s_s_text:{
        fontSize:13,
        color:'#f4f4f4',
        padding:3,
        backgroundColor:'red',
        borderRadius:3,
        margin:5,
    }
    
})

export default React.memo(Offs);