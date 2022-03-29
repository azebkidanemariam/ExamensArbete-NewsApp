import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../styles/baseStyles";

type ButtonProps = {
  onPress: () => void;
  text:string,
};
const Button = (props:ButtonProps) => {
  
  return (
    <Pressable style={styles.button}onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        width: "90%",
        borderRadius: 30,
        marginTop: 20,
        alignSelf: "center",
        backgroundColor: color.black,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:15,
      },
      buttonText: {
      fontWeight:"700",
      color:"white",
      letterSpacing:1.9
      
      },
});
