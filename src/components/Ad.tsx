import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    Pressable,
  } from "react-native";
  import { Ad } from "../contexts/content/types";
  import React, { useContext, useEffect, useState } from "react";
  import { ContentContext } from "../contexts/content/ContentContext";
  import globalStyles from "../styles/styles";
  
  const AdComponent = () => {
    const { ads } = useContext(ContentContext)!;
    const [randomAd, setRandomAd] = useState<Ad | null>(null);
  
    useEffect(() => {
      if (ads.length) {
        setRandomAd(ads[Math.floor(Math.random() * ads.length)]);
      }
    }, [ads]);
  
    const handleOpenAd = () => {
      Linking.openURL(randomAd!.fields.url);
    };
    return (
      <Pressable style={styles.adWrapper} onPress={handleOpenAd}>
        <Text style={styles.text}>Annons</Text>
        {randomAd ? (
          <View>
            <Image
              style={styles.image}
              source={{
                uri: `https:${randomAd!.fields.image.fields.file.url}`,
              }}
            />
          </View>
        ) : null}
      </Pressable>
    );
  };
  
  export default AdComponent;
  
  const styles = StyleSheet.create({
    image: {
      height: 275,
      width: "100%",
      borderRadius: 10,
      alignSelf: "center",
    },
    adWrapper: {
      paddingHorizontal: 10,
      marginVertical: 10,
      
    },
    text:{
        marginBottom:10
    }
  });