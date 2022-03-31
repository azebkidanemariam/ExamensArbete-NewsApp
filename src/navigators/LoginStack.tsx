import { Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountDetails from "../screens/login/AccountDetails";
import Login from "../screens/login/Login";


const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Logga in">
      <Stack.Screen name="Logga in" component={Login} />
      
      <Stack.Screen name="Personuppgifter" component={AccountDetails} />

    </Stack.Navigator>
  );
};

export default LoginStack;