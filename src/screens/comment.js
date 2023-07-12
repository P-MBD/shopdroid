import React,{useState} from 'react'
import {Text, View, StyleSheet,ScrollView,Dimensions,TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import People_commment from '../components/comment_page/people_commment';
import Ripple from 'react-native-material-ripple'
import My_Header from "../components/header/my_header";
import Rating from '../components/kala_page/rating';

let props={
    head_name:'ForrgetPass',
    head_page_name:'نظرات'
}

const Comment_page= ()=>{
    const [filter_name,setFilter_name]=useState('جدید ترین نظرات')
    return(
<View>
    <ScrollView style={styles.container}>
        <My_Header {...props} />

        <View style={styles.name_view}>
            <Text style={styles.name_text}>هدفون</Text>
        </View>

        <View style={styles.padd10}>
            <Rating />  
            <People_commment />   
        </View>

        <View style={styles.filter}>
                <View style={styles.filter_ch}>
                    <Text style={styles.texth3}>{filter_name}</Text>
                    <MIcon name="sort" style={styles.filter_left_icon} />
                </View>

                <View style={styles.filter_ch}>
                       <Text style={styles.texth3}>15 نفر </Text>
                       <Text style={styles.texth3}>نظرات کاربران</Text>
                </View>
        </View>

    </ScrollView>

    <Ripple style={styles.btn} onPress={()=>navigate('Add_Comment')}>
                <MCIcon name='pencil' style={styles.btn_icon}/>
            </Ripple>
</View>
    )
}


const styles= StyleSheet.create({
    backgroundColor:'#ddd',

name_view:{
    width:'100%',
    height:null,
},
name_text:{
    width:'100%',
    fontSize:17,
    fontFamily:'IRANSansMobile_Light',
    color:'#222',
    textAlign:'center',
    padding:15,
},
padd10:{
    padding:10,
    paddingTop:0
},
filter:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:25,
    paddingLeft:25,
},
filter_ch:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
},
texth3:{
    fontFamily:'B Nazanin',
    fontSize:20,
    paddingLeft:25,
},
sort_border:{
    borderWidth:0.7,
    borderColor:'#666',
    paddingLeft:8,
    paddingRight:8,
    borderRadius:5,
    borderColor:'#fff'
},
btn:{
    position:'absolute',
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor:'#ef394e',
    alignItems:'center',
    justifyContent:'center',
    bottom:0,
    margin:15
},

})

export default React.memo(Comment_page)