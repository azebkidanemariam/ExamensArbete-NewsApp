import { StyleSheet, Text, View,ImageSourcePropType,Image,Pressable } from 'react-native'
import React from 'react'

interface ListedMenu {
    text: string, 
    iconSource: ImageSourcePropType,
    iconStyle: object, 
    onPress: () => void, 
}

const ListedMenu = (props:ListedMenu) => {
  return (
    <Pressable
    style={styles.menuRow}
    //@ts-ignore
    onPress={() => props.onPress()}
  >
    <View style={styles.iconWrapper}>
    <Image style={[styles.menuIcon, props.iconStyle]} source={props.iconSource} />
    </View>

    <Text style={styles.menuText}>{props.text}</Text>
    </Pressable>
  )
}

export default ListedMenu

const styles = StyleSheet.create({
    iconWrapper: {
        alignItems: "center",
        marginRight: 15,
        width: 30,
      },
      menuIcon: {
        height: 20,
      },
      menuText: {
        fontWeight: "700",
      },
      menuRow: {
        alignItems: "center",
        flexDirection: "row",
        height: 40,
      },

})