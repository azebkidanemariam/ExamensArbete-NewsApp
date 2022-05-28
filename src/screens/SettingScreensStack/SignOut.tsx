import { View, Text } from "react-native";
import { useContext } from "react";
import { UserContext } from "../../contexts/user/UserContext";
import globalStyles from "../../styles/styles";
import Button from "../../components/Button";

const SignOut: React.FC = () => {
  const { logout } = useContext(UserContext)!;
  return (
    <View style={globalStyles.container}>
      <Button text="LOGGA UT" onPress={logout} />
    </View>
  );
};
export default SignOut;
