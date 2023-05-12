import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'
const w = Dimensions.get('screen').width;
const Content = () => {
    return(
        <View style={{flex:1}}>
            <TouchableOpacity style={styles.btn}>

            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
        btn:{
            width:w,
            height:w/11,
            backgroundColor:'gray'
        }
})

export default React.memo(Content)