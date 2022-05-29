import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import ListedMenu from '../../components/ListedMenu'
import { ScrollView } from 'react-native-gesture-handler'
import globalStyle from '../../GlobalStyles/styles'

const Menu: React.FC = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={globalStyle.container}>

    
      <ScrollView>

    <View style={styles.menu}>
      <ListedMenu
      text='About Us'
      iconSource={require("../../../assets/images/aboutUs.png")}
      iconStyle={styles.Icon}
      onPress={() => navigation.navigate("About" as never)}
      />
       <ListedMenu
      text='Integrity and Policies'
      iconSource={require("../../../assets/images/privacy.png")}
      iconStyle={styles.Icon}
      onPress={() => navigation.navigate("Policies" as never)}
      />
       <ListedMenu
      text='Help'
      iconSource={require("../../../assets/images/questionmark.png")}
      iconStyle={styles.Icon}
      onPress={() => navigation.navigate("Help" as never)}
      />
        <ListedMenu
      text='Reset Password'
      iconSource={require("../../../assets/images/key.png")}
      iconStyle={styles.Icon}
      onPress={() => navigation.navigate("ChangePassword" as never)}
      />
        <ListedMenu
      text='SignOut'
      iconSource={require("../../../assets/images/logout.png")}
      iconStyle={styles.Icon}
      onPress={() => navigation.navigate("SignOut" as never)}
      />
    </View>
      </ScrollView>
      </SafeAreaView>
  )
}

export default Menu

const styles = StyleSheet.create({
Icon:{
    width: 20
},
menu: {
    marginTop: 100,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingBottom: 120,
  },
})