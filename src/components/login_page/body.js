import React,{useState} from 'react'
import { View,StyleSheet,TextInput,TouchableOpacity,CheckBox,Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'react-native-material-ripple'

const Body = ()=>{
    const [user,setUser]=useState(false)
    const [pass,setpass]=useState(false)
    _changeBorderUser=()=>{
        setUser(true)
        setpass(false)
    }
    _changeBorderPass=()=>{
        setUser(false)
        setpass(true)
    }
    const [check,setcheck]=useState(true)
    _changeCheckValue=()=>{
        setcheck(!check)
    }
    
    return(

        <View style={styles.container}>
                <View style={styles.sec1}>
                <TouchableOpacity 
                    style={[styles.sec1_p,user?{borderColor:'green'}:{}]}
                    activeOpacity={0.9}
                    onPress={()=>_changeBorderUser()}
                >
                    <TextInput
                        placeholder="شماره موبایل یا ایمیل"
                        placeholderTextColor='#999'
                        onFocus={()=>_changeBorderUser()}
                        style={styles.text_input}
                    />
                    <Icon name='email' size={25} color='#aaa' style={styles.text_input_icon}/>
                </TouchableOpacity>  

                <TouchableOpacity 
                    style={[styles.sec1_p,pass?{borderColor:'green'}:{}]}
                    activeOpacity={0.9}
                    onPress={()=>_changeBorderPass()}
                >
                    <TextInput
                        placeholder="کلمه عبور"
                        placeholderTextColor='#999'
                        secureTextEntry={check}
                        onFocus={()=>_changeBorderPass()}
                        style={styles.text_input}
                    />
                    <Icon name='lock' size={25} color='#aaa' style={styles.text_input_icon}/>
                </TouchableOpacity>   
                </View> 

                <View style={styles.sec2}>
                    <Text style={styles.sec2_text}>نمایش کلمه عبور</Text>
                    <Ripple style={[styles.sec2_check,check==false?{borderColor: 'green'}:{}]} onPress={()=>_changeCheckValue()}>
                    {
                        check==false?
                        <Icon name='check' size={25} color='green'/>
                        :
                        null
                    }
                </Ripple>
                </View>  

                <View style={styles.sec3}>
                    <Text style={styles.sec3_text1}>
                        کلمه عبور را فراموش کرده ام!
                    </Text>
                    <Text style={styles.sec3_text2}>
                        ثبت نام در دیجی کالا
                    </Text>
                </View>
        </View>

    )
}

const styles= StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        padding:20,
        justifyContent:'flex-start',
        //alignItems:'center',
       
    },
    sec1:{
        alignItems:'center',
        justifyContent:'center',
    },
    sec1_p:{
        margin:5,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        borderBottomWidth:1.5,
        borderColor:'#666',
        width:'90%',
    },
    sec2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:22,
        marginRight:22
    },
    sec2_text:{
        fontSize:11,
        color:'#888',
        marginRight:8,

    },
    text_input:{
        padding:5,
        width:'95%',
        textAlign:'right',
        paddingBottom:20,
    },
    text_input_icon:{

    },
    sec2_text:{
        fontSize:12,
        color:'#888',
        marginRight:8,

    },
    sec2_check:{
        width:25,
        height:25,
        backgroundColor:'#ddd',
        elevation:2,
        borderRadius:3,
        borderWidth:0.6,
        borderColor:'transparent',
        alignItems:'center',
        justifyContent:'center',
    },
    sec3:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    sec3_text1:{
        fontSize:13,
        color:'#9a9a9a',
        padding:10,
    },
    sec3_text2:{
        fontSize:13,
        color:'green',
        textDecorationLine:'underline',
        marginTop:25
    },
})

export default React.memo(Body)