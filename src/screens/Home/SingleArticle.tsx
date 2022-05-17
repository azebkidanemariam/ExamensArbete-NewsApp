import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { UserContext } from "../../contexts/user/UserContext";
import React, { useContext, useState, useEffect } from "react";
import globalStyles from "../../styles/styles";
import styles from "./styles";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { Celebrity, Article } from "../../contexts/content/types";
import { ContentContext } from "../../contexts/content/ContentContext";
import Ad from "../../components/Ad";
import Styles from "./styles";

interface ArticleProps {
  route: {
    params: {
      article: Article;
    };
  };
}

const SingleArticle = (props: ArticleProps) => {
  const navigation = useNavigation();
  const { articles } = useContext(ContentContext)!;

  const { headline, preamble, body, images, featureImage, video } =
    props.route.params.article.fields;
  console.log(preamble[0]);

  const [selected, setSelected] = useState<string[]>([]);

  const textBody = body.content
    .map((paragraph: any) => paragraph.content[0].value)
    .join("\n\n");

 /*  const handleCelebrityBio = (celebrity: Celebrity) => {
    //@ts-ignore
    navigation.navigate("Bio", { celebrity });
  }; */
  const handleArticle = (article: any) => {
    //@ts-ignore
    navigation.navigate("Articles", { article });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={globalStyles.container}>
          <Image
            style={styles.featureImage}
            source={{
              uri: `https:${featureImage.fields.file.url}`,
            }}
          />
        </View>
        <View
          style={globalStyles.Articlecontainer}
          {...{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
        >
          <Text style={globalStyles.headlineText}>{headline}</Text>
          <Text style={globalStyles.preambel}>{preamble}</Text>
          <Text style={globalStyles.body}>{textBody}</Text>
          {video ? (
            <Video
              style={styles.video}
              source={{
                uri: `https:${video.fields.file.url}`,
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
          ) : null}
        </View>
        <View style={globalStyles.container}>

        <ScrollView horizontal={true}>
          {images
            ? images.map((img: any) => (
                <View key={img.sys.id}>
                  <Image
                    style={globalStyles.image}
                    source={{
                      uri: `https:${img.fields.file.url}`,
                    }}
                  />
                </View>
              ))
            : null}
        </ScrollView>
        </View>
        <View style={globalStyles.wrapper}>

        <Ad />
        <Text style={globalStyles.moreArticle}>Fler artiklar</Text>

        {articles.length ? (
          <ScrollView>
            {articles.map((item) => (
              <Pressable key={item.sys.id} onPress={() => handleArticle(item)}>
                {item.fields.featureImage ? (
                  <View>
                    <>
                    <View style={Styles.articleDivider}></View>
                      <Image
                        style={globalStyles.articleListimg}
                        source={{
                          uri: `https:${item.fields.featureImage.fields.file.url}`,
                        }}
                      />
                        <View style={globalStyles.moreArticleContainer}>
                        <Text numberOfLines={2} style={globalStyles.headlineMoreArticle}>
                          {item.fields.headline}
                        </Text>
                        <Text numberOfLines={5} style={globalStyles.body}>
                          {item.fields.preamble}
                        </Text>
                      </View>
                    </>
                  </View>
                ) : null}
              </Pressable>
            ))}
          </ScrollView>
        ) : null}
        </View>

      </ScrollView>
    </View>
  );
};

export default SingleArticle;
