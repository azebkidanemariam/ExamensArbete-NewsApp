
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import UserContextProvider from "./src/contexts/user/UserContext";
import ContentContextProvider from "./src/contexts/content/ContentContext";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Seems like you're using an old API with gesture components, check out new Gestures system!"])
export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <ContentContextProvider>
          <AuthNavigator />
        </ContentContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  );
}