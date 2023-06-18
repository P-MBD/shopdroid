import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
  import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';


const DrawerContent = (props)=>{
    const {navigation} = props;
return(
  <DrawerContentScrollView {...props}>
  <View>
  <Text  onPress={() => navigation.navigate('Main')}>
        Home
      </Text>
  </View>
  </DrawerContentScrollView>

  );
};

export default React.memo(DrawerContent)