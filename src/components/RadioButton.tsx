import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import "../styles/baseStyles";
import { color } from "../styles/baseStyles";

type RadioButtonI = {
  options: string[];
  onChangeSelect: (opt: string, index: number ) => void;
  selected: any;
};

const RadioButton = (props: RadioButtonI) => {
  return (
    <View style={styles.horizontal}>
      {props.options.map((opt, index) => (
        <TouchableOpacity
          key={opt}
          onPress={() => {
            props.onChangeSelect(opt, index);
          }}
          style={styles.optionContainer}
        >
          <View style={styles.radioButton}>
            {props.selected === index && <View style={styles.selected} />}
          </View>
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
  },

  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 12, 
  },

  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "transparent",
    borderColor: color.darkGrey,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },

  selected: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: color.pink,
  },
});
export default RadioButton;
