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
    
    return(

        <View style={styles.container}>
                <View style={styles.sec1}>
                <TouchableOpacity 
                    style={[styles.sec1_p,user?{borderColor:'green'}:{}]}
                    activeOpacity={0.9}
                    onPress={()=>_changeBorderUser()}
                >
                    <Text style={styles.sec1_p_text}>
                        شماره موبایل
                    </Text>
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
                    <Text style={styles.sec1_p_text}>
                       کلمه عبور
                    </Text>
                    <TextInput
                        placeholder="کلمه عبور"
                        placeholderTextColor='#999'
                        secureTextEntry={true}
                        onFocus={()=>_changeBorderPass()}
                        style={styles.text_input}
                    />
                    <Icon name='lock' size={25} color='#aaa' style={styles.text_input_icon}/>
                </TouchableOpacity>   
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
 
    text_input:{
        padding:5,
        width:'95%',
        textAlign:'right',
        paddingBottom:-20,
    },
    text_input_icon:{
        position:'relative'
    },
    sec1_p_text:{
        color:'rgb(0,128,255)',
        fontSize:12,
        position:'absolute',
        paddingBottom:35,
        paddingRight:30
    }

})

export default React.memo(Body)