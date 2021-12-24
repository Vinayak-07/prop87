import React, { Component } from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import TabNavigator from "./TabNavigator"
import PostCard from '../screens/PostCard'

const Stack = createStackNavigator()
const StackNavigator = ()=> {
    return(
        <Stack.Navigator initialRouteName = "PostCard" screenOptions ={{headerShown : false}}>
            <Stack.Screen name ="Home" component = {TabNavigator}/>
            <Stack.Screen name ="PostCard" component = {PostCard}/>
        </Stack.Navigator>
        
    );
}
export default StackNavigator ;
