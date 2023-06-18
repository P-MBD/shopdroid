import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import{createDrawerNavigator} from '@react-navigation/drawer'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
const Drawer = createDrawerNavigator();

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


const MyDrawer = () =>{
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Main"
      screenOptions={{
        headerShown: false
      }}
      
      >

        <Drawer.Screen
          name="Main"
          component={Main}
          
        />

        <Drawer.Screen
          name="AboutCategory"
          component={AboutCategory}     
        />

       <Drawer.Screen
          name="Off"
          component={Off}     
        />
      
      
      <Drawer.Screen
          name="Kala"
          component={Kala}     
        />

       <Drawer.Screen
          name="Shop_cart"
          component={Shop_cart}     
        />

         <Drawer.Screen
          name="Login"
          component={Login}     
        />

        <Drawer.Screen
          name="SignOn"
          component={SignOn}     
        />
        <Drawer.Screen
          name="Forget_Pass"
          component={Forget_Pass}     
        />
        <Drawer.Screen
          name="Search"
          component={Search}     
        />

       <Drawer.Screen
          name="Category"
          component={Category}     
        />

     
      
    </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default MyDrawer;