import React,{useState} from 'react'
import{Text,StyleSheet,View,Dimensions,Share} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { kala_share } from '../../data/dataArray';
import Ripple from 'react-native-material-ripple'
const w= Dimensions.get('window').width;
const Sharee=()=>{
    const [shareValue,setShareValue]=useState('');
    const ShareKala = () =>{
        Share.share({
            message:shareValue.toString()
        })
    }
    return(

        <View style={styles.container}>
           <View style={styles.box1}>
                <Ripple style={styles.btn} onPress={()=>ShareKala()}>
                     <Icon name="share-alt" size={18} color="#999"/>
                </Ripple>

                <Ripple style={styles.btn}>
                    <Icon name="bell" size={18} color='#999' style={{marginLeft:34,marginRight:34}} />
                </Ripple>

                <Ripple style={styles.btn}>
                     <Icon name="heart" size={18} color='#999'/>  
                </Ripple>
                
                
                
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
const styles=StyleSheet.create({
    container:{
        width:w,
        height:null,
        backgroundColor:'#fafafa',
        borderColor:'#ccc',
        borderTopWidth:0.5,
        borderBottomWidth:1.5,
    },
    box1:{
        flexDirection:'row',
    },
    box2:{
        marginLeft:20,
        marginRight:20
    },
    p_name:{
        color:'#111',
        fontSize:16,
        fontFamily:'IRANSansMobile_Light',
    },
    e_name:{
        color:"#777",
        fontSize:14,
        textAlign:'right',
        fontFamily:'IRANSansMobile_Light',
    },
    btn:{
        paddingLeft:16,
        paddingTop:12,
        paddingRight:18,
        paddingBottom:12,
        borderRadius:30
    }
})

export default React.memo(Sharee)


