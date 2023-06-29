import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { I18nManager } from 'react-native';
I18nManager.forceRTL(true)
import Main from './src/screens/main';
import AboutCategory from './src/screens/about_category';
import Off from './src/screens/off';
import Kala from './src/screens/kala';
import Shop_cart from './src/screens/shop_cart'
import Login from './src/screens/Login'
import SignOn from './src/screens/signOn';
import Forget_Pass from './src/screens/forget_pass';
import Search from './src/screens/search';
import Category from './src/screens/category';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen
          name="Main"
          component={Main}
          
        />

        <Stack.Screen
          name="AboutCategory"
          component={AboutCategory}     
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

        <Stack.Screen
          name="SignOn"
          component={SignOn}     
        />
        <Stack.Screen
          name="Forget_Pass"
          component={Forget_Pass}     
        />
        <Stack.Screen
          name="Search"
          component={Search}     
        />

       <Stack.Screen
          name="Category"
          component={Category}     
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;