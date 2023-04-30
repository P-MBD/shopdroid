import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/screens/main';
import Category from './src/screens/category';
import Off from './src/screens/off';
import Kala from './src/screens/kala';
import Shop_cart from './src/screens/shop_cart'
import Login from './src/screens/Login'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Main"
          component={Main}
          
        />

        <Stack.Screen
          name="Category"
          component={Category}     
        />

       <Stack.Screen
          name="Off"
          component={Off}     
        />
      
      
      <Stack.Screen
          name="Kala"
          component={Kala}     
        />

       <Stack.Screen
          name="Shop_cart"
          component={Shop_cart}     
        />

         <Stack.Screen
          name="Login"
          component={Login}     
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;