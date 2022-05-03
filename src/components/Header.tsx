import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Pressable, Text, View, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Logo from '../components/Logo'
import {color} from '../styles/baseStyles'
interface HeaderProps {
  text?: string;
  home?: boolean;
  backButton?: boolean;
}

const Header = (props: HeaderProps) => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.header, { paddingTop: insets.top + 10}]}>
      {props.home ? (
        <View style={styles.headerHome}>
          <Logo width={60} height={60} />
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          {props.backButton ? (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                alignSelf: "flex-end",
                paddingBottom: 12,
                paddingLeft: 10,
              }}
            >
              <Image
                style={styles.chevron}
                source={require("../../assets/images/chevron-left.png")}
              />
            </Pressable>
          ) : null}
          <Text style={styles.headerText}>{props.text}</Text>
        </View>
      )}
      <View style={styles.logoContainer}>
        <Logo width={60} height={60} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-end",
    backgroundColor: "#fff",
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "100%",
    zIndex: 2,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
  },
  iconContainer: {
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 14,
  },
  icon: {
    width: 24,
    height: 24,
  },
  chevron: {
    width: 24,
    height: 24,
    marginBottom: -2,
    marginRight: -5,
  },
  dot: {
    backgroundColor: color.white,
    justifyContent: "center",
    alignItems: "center",
    width: 15,
    height: 15,
    borderRadius: 10,
    position: "absolute",
    right: 8,
    top: 16,
    zIndex: 3,
  },
  dotText: {
    color: "#fff",
    fontSize: 8,
    fontWeight: "500",
    zIndex: 3,
  },
  logoContainer: {
    paddingRight: 10,
    paddingBottom: 5,
  },

  headerHome: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 4,
    paddingBottom: 8,
    width: "100%",
  },
});


