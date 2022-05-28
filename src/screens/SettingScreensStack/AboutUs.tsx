import { StyleSheet, Text, View,Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "../../GlobalStyles/theme";
import globalStyle from "../../GlobalStyles/styles"

const About: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      <View style={styles.container}>
        <Text style={styles.headlineText}>Our Story</Text>
      </View>
      
      <View style={globalStyle.container}>

      <Image
        style={styles.image}
        source={require('../../../assets/images/about.jpg')}
      />
      <Text style={globalStyle.paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.blue,
    height: 200,
  },
  headlineText: {
    alignSelf: "center",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 60,
    color:color.headlineGreen
  },
  image: {
    width:350,
    height:200,
    marginTop: -70,
    alignSelf:'center',
    marginBottom:50,
  }
});
