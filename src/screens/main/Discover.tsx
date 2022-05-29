import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ContentContext } from "../../contexts/content/ContentContext";
import { UserContext } from "../../contexts/user/UserContext";
import { Article } from "../../contexts/content/types";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../styles/styles";
import Styles from "../home/styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { color } from "../../styles/baseStyles";

const Discover: React.FC = () => {

  const { articles, fetchNextArticles, contentError, setContentError } =
    useContext(ContentContext)!;
  const { logout } = useContext(UserContext)!;
  const navigation = useNavigation();

  const handleArticle = (article: any) => {
    //@ts-ignore
    navigation.navigate("SingleArticle", { article });
    console.log (article)
  };

  const handleLogout = () => {
    setContentError(false);
    logout();
  };
 

  const renderItem: ListRenderItem<Article> = ({ item }) => {
    if (item.fields.featureImage) {
      return (
        <>

       
          <Pressable
            onPress={() => handleArticle(item)}
            style={[globalStyles.articleCard]}
          >
             
            <LinearGradient
              style={globalStyles.gradient}
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              locations={[0.6, 1]}
            />
            <>
              <Image
                style={globalStyles.featureImage}
                source={{
                  uri: `https:${item.fields.featureImage.fields.file.url}`,
                }}
              />
             <Text style={styles.headline}>{item.fields.headline}</Text>
            </>
          </Pressable>
          
             
          <Modal
            animationType="slide"
            transparent={false}
            visible={contentError}
          >
            <View style={globalStyles.container}>
              <Logo width={150} height={75} />
              <Text style={styles.text}>
                Kunde inte hämta innehållet. Logga ut och försök igen senare.
              </Text>
              <Button text="OK" onPress={handleLogout} bottom />
            </View>
          </Modal>
        </>
      );
    } else return null;
  };

  return (
    <>

      <View style={globalStyles.container}>
        {articles && articles.length ? (
          <>
          <FlatList
            onEndReachedThreshold={.4}
            onEndReached={fetchNextArticles}
            style={globalStyles.articleList}
            data={articles}
            renderItem={renderItem}
            keyExtractor={(item) => item.sys.id}
          />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </>
  );
};
export default Discover;
const styles = StyleSheet.create({
  text: {
    marginVertical: 75,
    fontSize: 18,
  },
  headline: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    paddingHorizontal: 5,
    paddingBottom: 5,
    position: "absolute",
    bottom: 0,
    zIndex: 20,
  },
 
});
