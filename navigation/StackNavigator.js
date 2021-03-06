import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../navigation/TabNavigator';
import PostScreen from '../screens/PostScreen';
const Stack = createStackNavigator();

const StackNavigator =()=>{
    return(
        <Stack.Navigator
        initiateRoutName="Home"
        screenOptions={{
            headerShown:false
        }}>

        <Stack.Screen name='Home' component={TabNavigator}/>
        <Stack.Screen name='PostScreen' component={PostScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;
