import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {color} from "../styles/baseStyles"

const Separator = () => {
  return (
    <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text>Eller</Text>
        <View style={styles.line} />
      </View>
  )
}

export default Separator

const styles = StyleSheet.create({
    lineContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15,
      },
    
      line: {
        borderColor: color.darkGrey,
        borderWidth: 0.5,
        width: "30%",
        marginHorizontal: 20,
      },
})