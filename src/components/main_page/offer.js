import React from 'react'
import {View,Image,StyleSheet,Dimensions} from 'react-native'
import Ripple from 'react-native-material-ripple'
import {offer_list} from '../../data/dataArray'
import { useNavigation } from '@react-navigation/native';
const w = Dimensions.get('window').width;

const Offer = () => {
    const {navigate} = useNavigation();
    return(
        <View style={styles.container}>
            {
                offer_list.map((item,key)=>(
                    key==2?
                    (
                        <Ripple style={styles.one_box} onPress={()=>navigate('Off')}>
                            <Image 
                                style={styles.img}
                                source={{uri:item.img}}
                            />
                        </Ripple>
                    )
                    :
                    (
                        <Ripple style={styles.two_box} onPress={()=>navigate('Off')} >
                            <Image 
                                style={styles.img}
                                source={{uri:item.img}}
                            />
                        </Ripple>
                    )                    
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    one_box:{
        width:'97%',
        height:w/3.7,
        borderRadius:10,
    },
    two_box:{
        width:'47%',
        height:w/3.7,
        marginTop:15,
        marginBottom:15,
        borderRadius:10
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:10
    }
})


export default React.memo(Offer);