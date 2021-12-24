import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator"
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import Login from "../screens/login";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name = 'Login' component = {Login}></Drawer.Screen>
      <Drawer.Screen name = 'Home' component = {StackNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
