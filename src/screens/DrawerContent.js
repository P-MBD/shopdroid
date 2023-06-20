import {StyleSheet, Text, View,Button,Pressable} from 'react-native';
import React from 'react';
  import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  import Ripple from 'react-native-material-ripple'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const DrawerContent = (props)=>{
  const navigation = useNavigation();

  return (

<Ripple style={styles.btn}  >
<MCIcon name='menu' style={styles.icon}  onPress={() =>  navigation.toggleDrawer()}/>
</Ripple>
  );
    }

    const styles = StyleSheet.create({
    
      btn:{
          padding:15,
          borderRadius:100,
      },
      icon:{
          fontSize:23,
          color:'#fff'
      },
 

  })
  

export default React.memo(DrawerContent)