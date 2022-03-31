import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {color} from "../styles/baseStyles"

type AuthButtonI = {
    onPress:()=> void
    source: any
    title: string
    google: boolean
    facebook: boolean
    paddingVertical: number
  };

const AuthButtons = (props: AuthButtonI) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={[{paddingVertical: props.paddingVertical}, styles.button, props.facebook ? styles.buttonFacebook : null, props.google ? styles.buttonGoogle : null ]}
            activeOpacity={0.5}
            onPress={props.onPress}
          >
            <Image
              source={props.source}
              style={styles.icon}
            />
    
            <Text style={[styles.buttonTextFacebook, props.google ? styles.buttonTextGoogle : null ]}>{props.title}</Text>
          </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  button: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "space-evenly",
    borderRadius: 30,
  },

  buttonGoogle: {
    backgroundColor: "white",
    borderColor: color.darkGrey,
    borderWidth: 1
  },

  buttonFacebook: {
    backgroundColor: "#2b4288",
  },

  icon: {
    left: 20,
    position: "absolute",
    height: 25,
    width: 25,
  },

  buttonTextGoogle: {
    color: "#939393",
    fontWeight: "700",
    letterSpacing: 1.9,
    textTransform: "uppercase",
  },

  buttonTextFacebook: {
    textAlign:"center",
    width:"70%",
    color: "white",
    fontWeight: "700",
    letterSpacing: 1.9,
    textTransform: "uppercase",
  }

});

export default AuthButtons;
