import React from 'react'
import { ScrollView,TouchableOpacity,Text,StyleSheet } from 'react-native'
import { cat_list } from '../../data/dataArray'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Cat=()=>{
    return(
        <ScrollView
        style={styles.container} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                cat_list.map((item,key)=>(
                    <TouchableOpacity style={styles.btn} >
                        <MaterialIcons name='keyboard-arrow-left' size={22} color="#bbb"/>
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))
            }
             
        </ScrollView>

    )
}

const styles= StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:4
    },
    btn:{
        paddingTop:6,
        paddingBottom:6,
        paddingRight:14,
        paddingLeft:10,
        backgroundColor:'#fff',
        borderRadius:100,
        marginLeft:5,
        marginRight:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#13c3ea',
        fontSize:14,
        fontFamily:'IRANSansMobile_Light',

    }
})

export default React.memo(Cat);

