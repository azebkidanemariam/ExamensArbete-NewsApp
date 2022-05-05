import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { color } from '../styles/baseStyles'
const StatusBarSemiTransparent = () => {
  const insets = useSafeAreaInsets()
  
  return (
    <>
    <StatusBar animated style="light" />
    <View style={[styles.bar, {height: insets.top}]}>
    </View>
    </>
  )
}

export default StatusBarSemiTransparent

const styles = StyleSheet.create({
  bar: {
    backgroundColor: color.lightgreen,
    opacity: 0.8,
    position: 'absolute', 
    top: 0, 
    left: 0,
    right: 0,
    zIndex: 2,
  }
})
