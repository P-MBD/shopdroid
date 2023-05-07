import React,{useState} from 'react'
import { View,StyleSheet,TextInput,TouchableOpacity,Text,Dimensions } from 'react-native'
import Ripple from 'react-native-material-ripple'


const w = Dimensions.get('window').width;
const Content = ()=>{
    
    return(

        <View style={styles.container}>
               <View style={styles.sec1}>
                    <Text style={styles.sec1_t1}>
                        کد تایید برای شماره 0935 ارسال گردید
                    </Text>

                    <Text style={styles.sec1_t2}>
                        ویرایش شماره تماس
                    </Text>

               </View>   
               <View style={styles.sec2}>
                    <Text style={styles.sec2_t1}>
                        کد تایید را وارد نمایید
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
        paddingLeft:30,
        paddingRight:30,
        justifyContent:'flex-start',
        //alignItems:'center',
       },
       sec1:{
        width:null,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#5ba056',
        padding:15,    
        justifyContent:'space-between',
       },
       sec1_t1:{
        fontSize:15,
        color:'#d5d5d5',
        paddingTop:5,
        paddingBottom:10,
       },
       sec1_t2:{
        fontSize:15,
        color:'#43a3e7',
        paddingTop:5,
        paddingBottom:10
       },
       sec2:{
        marginTop:35
       },
       sec2_t1:{
        fontSize:16,
        color:'#a9a9a9'
       },
     
    


})

export default React.memo(Content)