import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/screens/main';
import Category from './src/screens/category';
import Off from './src/screens/off';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Off'>
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
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;