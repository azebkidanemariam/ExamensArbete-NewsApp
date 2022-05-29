import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import globalStyle from "../../GlobalStyles/styles";
import style from "../../styles/styles";

const Help: React.FC = () => {
  return (
    <SafeAreaView style={globalStyle.container}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/help.jpg")}
          />
          <Text style={style.headlineText}>
            You are always welcome to contact us!
          </Text>
      <ScrollView>
        <View style={globalStyle.container}>
          <Text style={globalStyle.preamble}>
            Paradox's editors work hard to give you the best news experience
            with all perspectives. Did you find an error in an article? Have we
            missed reporting something important? It is always nice to contact
            the editors who are on duty! We respond as much as we can! Email to
            in-service editors at Omni: Redaktion@Paradox.com If you want to get
            in touch with individual employees at Paradox, you can reach them at
            fornamn.efternamn@paradox.com. Editor-in-chief and responsible
            publisher of Paradox is Maja Abebe. Address: Paradox AB
            FrihetsVägen 54 177 57 Stockholm

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={style.wrapper}>

          <Text style={style.headline}>Address:</Text>
          <Text style={globalStyle.preamble}>Paradox AB FrihetsVägen 54 </Text>
          <Text style={globalStyle.preamble}>177 57 Stockholm</Text>
          <Text style={globalStyle.preamble}>Telephone: 08-000 21 78</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Help;

const styles = StyleSheet.create({

  image: {
    /* paddingVertical: 20, */
    height: 300,
    width: '100%',
    borderRadius: 1,
    alignSelf: "flex-start",
   
  },
});
