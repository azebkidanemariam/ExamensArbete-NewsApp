import { useContext, useState, useEffect } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { UserContext } from "../../contexts/user/UserContext";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import Logo from "../../components/Logo";
import AuthButtons from "../../components/AuthButtons";
import globalStyles from "../../styles/styles";
import styles from "./styles";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { login, getStorageData, errorState, setErrorState } =
    useContext(UserContext)!;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Kunde inte logga in!",
      "Något har gått fel, kolla email och lösenord och försök igen.",
      [{ text: "OK", onPress: () => setErrorState(false) }]
    );

  useEffect(() => {
    if (errorState) {
      createTwoButtonAlert();
    }
  }, [errorState]);

  const handleCreateAccount = () => {
    //@ts-ignore
    // navigation.replace("Personuppgifter");
    navigation.navigate("Personuppgifter");
  };

  const resetPassword = () => {
    //@ts-ignore
    navigation.navigate("Glömt lösenord");
  };

  useEffect(() => {
    getStorageData();
  }, []);

  return (
    // <KeyboardAvoidingView >
    <View style={globalStyles.container}>
      <View style={styles.logoView}>
        <Logo width={150} height={75} />
      </View>

      <AuthButtons
        paddingVertical={15}
        onPress={handleLogin}
        source={require("../../../assets/facebook.png")}
        title={"Logga in med Facebook"}
        google={false}
        facebook={true}
      />
      <AuthButtons
        paddingVertical={15}
        onPress={handleLogin}
        source={require("../../../assets/google.png")}
        title={"Logga in med google"}
        google={true}
        facebook={false}
      />
      <Separator />
      <TextInput
        style={globalStyles.textInput}
        value={email}
        placeholder="E-postadress"
        placeholderTextColor="#706F70"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={globalStyles.textInput}
        value={password}
        placeholder="Lösenord"
        placeholderTextColor="#706F70"
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        // secureTextEntry
      />

      <Button text="LOGGA IN" onPress={handleLogin} />

      <Pressable onPress={resetPassword}>
        <Text style={styles.resetPassword}>Glömt lösenord?</Text>
      </Pressable>

      <Separator />

      <Button text="SKAPA NYTT KONTO" onPress={handleCreateAccount} />
    </View>
    // </KeyboardAvoidingView>
  );
};

export default Login;