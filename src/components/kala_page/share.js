import React from 'react'
import{Text,StyleSheet,View,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { kala_share } from '../../data/dataArray';
const w= Dimensions.get('window').width;
const Share=()=>{
    return(

        <View style={styles.container}>
           <View style={styles.box1}>
                <Icon name="share-alt" size={18} color="#999"/>
                <Icon name="bell" size={18} color='#999' style={{marginLeft:34,marginRight:34}} />
                <Icon name="heart" size={18} color='#999'/>
           </View>
           <View style={styles.box2}>
            {
                kala_share.map((item,key)=>(
                    <View style={styles.box2}>
                        <Text style={styles.p_name}>
                            {item.p_name}
                        </Text>
                        <Text style={styles.e_name}>
                            {item.e_name}
                        </Text>
                    </View>
                ))
            }
           </View>
        </View>

    )
}
const styles= StyleSheet.create({

    container:{
        width:w,
        height:w/5,
        backgroundColor:'#fafafa',
        borderColor:'#ccc',
        borderTopWidth:0.5,
        borderBottomWidth:1.5,
    },
    box1:{
        flexDirection:'row',
        padding:12,
        marginLeft:5,
    },
    box2:{
        marginLeft:20,
        marginRight:20
    },
    p_name:{
        color:'#111',
        fontSize:16,
        
    },
    e_name:{
        color:"#777",
        fontSize:14,
        textAlign:'right',
     
    },

})

export default React.memo(Share)


