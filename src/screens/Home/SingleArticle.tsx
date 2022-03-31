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
  import Header from '../../components/Header'
  interface ArticleProps {
    route: {
      params: {
        article: Article;
      };
    };
  }
  
  const SingleArticle = (props: ArticleProps) => {
    const navigation = useNavigation();
    const { articles, ads } = useContext(ContentContext)!;
  /*   const { user, removeCategory, setCategories, addFollow, removeFollow } =
      useContext(UserContext)!; */
    const {
      headline,
      preamble,
      body,
      images,
      featureImage,
      video,
      /* celebrities,
      categories, */
    } = props.route.params.article.fields;
  
    const [selected, setSelected] = useState<string[]>([]);
  
    const textBody = body.content
      .map((paragraph: any) => paragraph.content[0].value)
      .join("\n\n");
  
    const handleCelebrityBio = (celebrity: Celebrity) => {
      //@ts-ignore
      navigation.navigate("Bio", { celebrity });
    };
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
           <View style={globalStyles.container}></View>
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
  
          <Ad />

          <Text style={globalStyles.bioTitle}>Fler artiklar</Text>
            {articles.length ? (
              <ScrollView horizontal={true}>
                {articles.map((item) => (
                  <Pressable
                    key={item.sys.id}
                    onPress={() => handleArticle(item)}
                  >
                    {item.fields.featureImage ? (
                      <View style={globalStyles.container}>
                        <>
                          <Image
                            style={globalStyles.articleListimg}
                            source={{
                              uri: `https:${item.fields.featureImage.fields.file.url}`,
                            }}
                          />
                          <View style={globalStyles.headlineBioContainer}>
                            <Text
                              numberOfLines={2}
                              style={globalStyles.headlineBio}
                            >
                              {item.fields.headline}
                            </Text>
                          </View>
                        </>
                      </View>
                    ) : null}
                  </Pressable>
                ))}
              </ScrollView>
            ) : null}
  
          
        </ScrollView>
      </View>
    );
  };
  
  export default SingleArticle;