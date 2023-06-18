import React from 'react'
import {View,Text,StyleSheet,FlatList,Image,Dimensions} from 'react-native'
import {kala} from '../../data/dataArray'
import Ripple from 'react-native-material-ripple'
import CountDown from 'react-native-countdown-component';
import { useNavigation } from '@react-navigation/native';


const w = Dimensions.get('window').width;

const Amazing_Auggestion = () => {
    const {navigate} = useNavigation();
    return(
        <View style={{marginTop:10}}>
            <View style={styles.head}>
            <CountDown
                    until={24*60*60}
                    size={14}
                    onFinish={() => alert('Finished')}
                    digitStyle={{backgroundColor: '#777',borderRadius: 1}}
                    digitTxtStyle={{color: '#fff',fontSize: 20,fontWeight: '500'}}
                    timeToShow={['H','M', 'S']}
                    timeLabels={{m: '', s: ''}}
                    showSeparator={true}
                />
                <Text style={styles.head_right}>
                    پیشنهاد <Text style={[styles.head_right,{color:'#ef394e'}]}>شفگت انگیز</Text> 
                </Text>
            </View>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={kala}
                renderItem={({item,index})=>
                    <Ripple style={styles.box} onPress={()=>navigate('Kala')}>
                        <View style={styles.view_img}>
                            <Image 
                                style={styles.img}
                                source={{uri:item.img}}
                            />
                        </View>
                        <View style={styles.view_name}>
                            <Text style={styles.text_name}>
                                {item.pname}
                            </Text>
                        </View>
                        <View style={styles.view_price}>
                            <Text style={styles.text_price}>
                                 {item.price} تومان
                            </Text>
                        </View>
                    </Ripple>
                }
                
               
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    head_left:{
        color:'#0052cc',
        fontSize:13,
        fontFamily:'IRANSansMobile_Light'
    },
    head_right:{
        fontSize:16,
        color:'#666',
        fontWeight:'bold',
        fontFamily:'IRANSansMobile'
    },
    box:{
        backgroundColor:'#fff',
        flexDirection:'column',
        width:w/2.8,
        height:w/1.8,
        marginLeft:3,
        marginRight:5,
        marginBottom:8,
        borderRadius:2,
        borderColor:'#ddd',
        borderWidth:0.5
    },
    view_img:{
        width:'100%',
        height:'65%',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:'90%',
        height:'100%',
        resizeMode:'contain'
    },
    view_name:{
        height:'20%',
        padding:5,
    },
    text_name:{
        fontSize:12,
        color:'#333',
        textAlign:'right',
        fontFamily:'IRANSansMobile_Light'
    },
    view_price:{
        height:'15%',
        borderTopWidth:0.4,
        borderColor:'#eee',
        justifyContent:'center',
        paddingLeft:5
    },
    text_price:{
        color:'#14dc17',
        fontSize:14,
        textAlign:'left',
        fontFamily:'B Nazanin',
    }
})

export default React.memo(Amazing_Auggestion);