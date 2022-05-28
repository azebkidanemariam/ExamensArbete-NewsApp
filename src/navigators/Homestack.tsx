import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/home/Home';
import SingleArticle from '../screens/home/SingleArticle'; 
import { createStackNavigator } from "@react-navigation/stack";;

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{ headerShown:false }}
    initialRouteName="Home">
    <Stack.Screen name="Homescreen" component={Home}  />
    <Stack.Screen name="SingleArticle" component={SingleArticle} />
  </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})