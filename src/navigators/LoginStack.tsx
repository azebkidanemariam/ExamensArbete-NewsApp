import { Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountDetails from "../screens/login/AccountDetails";
import Login from "../screens/login/Login";
import Payment from "../screens/login/Payment";
import ChoosePlan from "../screens/login/ChoosePlan";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Logga in">
      <Stack.Screen name="Logga in" component={Login} />
      <Stack.Screen name="Välj plan" component={ChoosePlan} />
      <Stack.Screen name="Personuppgifter" component={AccountDetails} />
      <Stack.Screen name="Betalning" component={Payment} />
    </Stack.Navigator>
  );
};

export default LoginStack;