import React from 'react'
import {View, Text, Image, StyleSheet, FlatList,Dimensions,TouchableOpacity} from 'react-native'
import {cat_item} from '../../data/dataArray'
import { useNavigation } from '@react-navigation/native';
const w = Dimensions.get('screen').width;
const Content = () => {
    const {navigate} = useNavigation();
    return(
        <View style={{flex:1}}>
            <FlatList 
                data={cat_item}
                renderItem={({item,key})=>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigate('AboutCategory',{header_name:item.name})}>
                        <Image 
                         style={styles.img}
                         source={{uri:item.img}} />
                        <Text  style={styles.txt}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                }
                keyExtractor={item=>item.id}
             

            />
        </View>
    )
}
const styles = StyleSheet.create({
        btn:{
            width:w,
            height:w/7,
            borderBottomWidth:.4,
            borderColor:'gray',
            flexDirection:'row',
            paddingRight:15,
            paddingLeft:15,
            justifyContent:'space-between',
            alignItems:'center'
        },
        img:{
            width:w/6,
            height:'90%',
            resizeMode:'contain'
        },
        txt:{
            fontSize:18,
            color:'#555',
        }
})

export default React.memo(Content)