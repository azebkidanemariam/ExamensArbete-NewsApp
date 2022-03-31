import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home/Home';
import Article from '../screens/Home/SingleArticle'; 
import { createStackNavigator } from "@react-navigation/stack";;

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Article" component={Article} />
  </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})