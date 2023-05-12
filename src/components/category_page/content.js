import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

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