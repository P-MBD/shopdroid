import React from "react";
import {View,Text,StyleSheet, Dimensions} from 'react-native'
import Ripple from 'react-native-material-ripple'
import Icon from 'react-native-vector-icons/MaterialIcons'
const w= Dimensions.get("window").width;

const Buttons = ()=>{
    return(
        <View style={styles.container}>
            <Ripple style={styles.btn}>
                <Text>
                    نظرات کاربران
                </Text>
                <Icon  name="content-paste" style={styles.txt}/>
            </Ripple>
            <Ripple style={styles.btn}>
                <Text style={styles.txt}>
                    مشخصات
                </Text>
                <Icon  name="forum" style={styles.txt}/>
            </Ripple>
            
        </View>
    )
}

const styles=StyleSheet.create({

    container:{
        marginTop:10,
        width:null,
        height:w/12 ,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    btn:{
        width:'48%',
        height:'100%',
        backgroundColor:'#fff',
        elevation:2,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',

    },
    txt:{
        color:'#7a707f',
        fontSize:16,
    }

})

export default React.memo(Buttons);

