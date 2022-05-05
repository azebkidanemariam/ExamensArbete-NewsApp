
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import UserContextProvider from "./src/contexts/user/UserContext";
import ContentContextProvider from "./src/contexts/content/ContentContext";
import { LogBox } from "react-native";
import StatusBarSemiTransparent from "./src/components/StatusBarSemiTransparent";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"

LogBox.ignoreLogs(["Seems like you're using an old API with gesture components, check out new Gestures system!"])
export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} >

    <StatusBarSemiTransparent  />
    <NavigationContainer>
      <UserContextProvider>
        <ContentContextProvider>
          <AuthNavigator />
        </ContentContextProvider>
      </UserContextProvider>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}