import { useContext, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { UserContext } from "../../contexts/user/UserContext";
import globalStyles from "../../styles/styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { login } = useContext(UserContext)!;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    login(email, password);
    console.log("In handleLogin");
  };
  const handleCreateAccount = () => {
    //@ts-ignore
    navigation.navigate("Välj plan");
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.logoView}>
        <Logo width={150} height={75} />
      </View>
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
      <Button text="SKAPA NYTT KONTO" onPress={handleCreateAccount} />
    </View>
  );
};
const styles = StyleSheet.create({
  logoView: {
    top: 100,
    position: "absolute",
  },
});

export default Login;