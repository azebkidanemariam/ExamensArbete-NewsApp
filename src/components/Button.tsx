import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type ButtonProps = {
  onPress: () => void;
  text: string;
  style?:any;
  disabled?: boolean;
  color?: string,
  bottom?: boolean
};
const Button = (props: ButtonProps) => {
  return (
    <Pressable
      style={[styles.button, props.bottom ? {position: 'absolute', bottom: 30}: null, props.color ? {backgroundColor: props.color}: null, props.disabled ? styles.buttonDisabled : null]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
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
    backgroundColor: "#546E7A",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  buttonText: {
    fontWeight: "700",
    color: "white",
    letterSpacing: 1.9,
    textTransform: "uppercase"
  },
  buttonDisabled: {
    backgroundColor: "#959595",
  },

});

