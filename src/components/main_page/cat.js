import React from 'react'
import { ScrollView,TouchableOpacity,Text,StyleSheet } from 'react-native'
import { cat_list } from '../../data/dataArray'
import { useNavigation } from '@react-navigation/native';
const Cat=()=>{
    const {navigate} = useNavigation();
    return(
        <ScrollView
        style={styles.container} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                cat_list.map((item,key)=>(
                    <TouchableOpacity style={styles.btn} onPress={() => navigate('Category',{num_tab:key})} >
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
        paddingTop:3,
        paddingBottom:3,
        paddingRight:10,
        paddingLeft:10,
        backgroundColor:'#66bb6a',
        borderRadius:100,
        marginLeft:5,
        marginRight:5
    },
    text:{
        color:'#fff',
        fontSize:14,
        fontFamily:'IRANSansMobile_Light'
    }
})

export default React.memo(Cat);

