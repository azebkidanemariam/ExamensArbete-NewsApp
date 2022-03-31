import { Text, TextInput, View, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/user/UserContext";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import globalStyles from "../../styles/styles";
import styles from "./styles";

const ResetPassword = () => {
  const { passwordReset } = useContext(UserContext)!;
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const controllEmail = () => {
    passwordReset(email);
  };

  const sendEmail = () => {
    Alert.alert("e-post skickat", "Kolla din inkorg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          //@ts-ignore
          navigation.navigate("Logga in"), console.log("OK Pressed");
        },
      },
    ]);
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.logoView}>
        <Logo width={150} height={75} />
      </View>
      <View style={{ width: "90%" }}>
        <Text style={styles.boldText}>Ange ditt E-postadress</Text>
        <TextInput
          style={globalStyles.textInput}
          value={email}
          placeholderTextColor="#706F70"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          placeholder="E-postadress"
        />
      </View>
      <Button
        text="skicka email"
        onPress={() => {
          controllEmail(), sendEmail();
        }}
         style={undefined} 
      />
      <View style={styles.textContainer}>
        <Pressable
          onPress={() => {
            //@ts-ignore
            navigation.navigate("Logga in");
          }}
        >
          <Text style={styles.link}> Logga in </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResetPassword;