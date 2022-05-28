import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/main/Settings";
import Favorites from "../screens/main/Favorites";
import Discover from "../screens/main/Discover";
import Music from "../screens/main/Music";
import { color } from "../styles/baseStyles";
import { HomeIcon, SettingsIcon, MusicIcon,DiscoverIcon,HeartIcon } from "../components/icons";
import HomeStack from "./Homestack";
import SettingStack from "./Settingstack";
import { Dimensions,Platform } from "react-native"

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const extraTabBarPadding =
    Platform.OS === "ios" && Dimensions.get("screen").height > 800;
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
     tabBarActiveTintColor: color.green,
      tabBarInactiveTintColor: color.lightGrey,
      tabBarShowLabel: true,
     tabBarStyle:{
       backgroundColor:color.lightgreen,
       borderTopLeftRadius:15,
       borderTopRightRadius:15,
       paddingHorizontal:10,
       paddingBottom:4,
       height:70,
     },
      tabBarIcon: ({ size, color }) => {
        
        if (route.name === "Home") {
          return <HomeIcon size={size} color={color} />;
        }
        if (route.name === "Settings") {
          return <SettingsIcon size={size} color={color} />;
        }
        if (route.name === "Favorites") {
          return <HeartIcon size={size} color={color} />;
        }
        if (route.name === "Discover") {
          return <DiscoverIcon size={size} color={color} />;
        }
        if (route.name === "Music") {
          return <MusicIcon size={size} color={color} />;
        }
        return null;
      },
      
    })}
  >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Music" component={Music} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;