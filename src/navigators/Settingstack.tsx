import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../screens/SettingScreensStack/AboutUs'
import ChangePassword from '../screens/SettingScreensStack/ChangePassword'
import Menu from '../screens/SettingScreensStack/Menu'
import Policies from '../screens/SettingScreensStack/Policies'
import SignOut from '../screens/SettingScreensStack/SignOut'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const SettingStack = () => {
  return (
   <Stack.Navigator
   screenOptions={{headerShown:false}}
   >
     <Stack.Screen name='Menu' component={Menu} />
       <Stack.Screen name='About' component={About} />
       <Stack.Screen name='ChangePassword' component={ChangePassword} />
       <Stack.Screen name='SignOut' component={SignOut} />
       <Stack.Screen name='Policies' component={Policies} />

   </Stack.Navigator>
  )
}

export default SettingStack

const styles = StyleSheet.create({})