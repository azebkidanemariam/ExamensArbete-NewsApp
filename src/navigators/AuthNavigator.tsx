import { useContext } from "react";
import { UserContext } from "../contexts/user/UserContext";
import LoginStack from "./LoginStack";
import MainTabNavigator from "./MainTabs";

const AuthNavigator: React.FC = () => {
  const { user } = useContext(UserContext)!;
  return !user ? <LoginStack /> : <MainTabNavigator />;
};

export default AuthNavigator;