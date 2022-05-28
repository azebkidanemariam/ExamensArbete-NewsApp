import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useState, useEffect, useRef } from "react";
import globalStyles from "../../styles/styles";
/* import styles from "./styles"; */
import { Video } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Article } from "../../contexts/content/types";
import { ContentContext } from "../../contexts/content/ContentContext";
import Ad from "../../components/Ad";
import Styles from "./styles";
import globalStyle from "../../GlobalStyles/styles";

interface NewsProps {
  route: {
    params: {
      article: Article;
    };
  };
}

const SingleNews = (props: NewsProps) => {
  const navigation = useNavigation();
  const { articles } = useContext(ContentContext)!;
  const scrollRef: React.MutableRefObject<any> = useRef();
  const { headline, preamble, body, images, featureImage, video } =
    props.route.params.article.fields;

  const paragraph = body.content
    .map((paragraph: any) => paragraph.content[0].value)
    .join("\n\n");

  useEffect(() => {
    scrollRef.current!.scrollTo({
      y: 0,
      animated: true,
    });
  }, [props.route.params.article]);
  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        style={{ flexGrow: 1, backgroundColor: '"red"' }}
      >
        <View>
        <Text style={globalStyles.headline}>{headline}</Text>
          <Image
            style={globalStyle.featureImage}
            source={{
              uri: `https:${featureImage.fields.file.url}`,
            }}
          />

          

          <Image
            style={globalStyles.featureImage}
            source={{
              uri: `https:${featureImage.fields.file.url}`,
            }}
          />
          <Text style={globalStyle.preamble}>{preamble}</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {images
              ? images.map((img: any) => (
                  <View key={img.sys.id}>
                    <Image
                      style={globalStyle.image}
                      source={{
                        uri: `https:${img.fields.file.url}`,
                      }}
                    />
                  </View>
                ))
              : null}
          </ScrollView>
          <Text style={globalStyle.paragraph}>{paragraph}</Text>
          <View>

          {video ? (
            <Video
              style={Styles.video}
              source={{
                uri: `https:${video.fields.file.url}`,
              }}
              useNativeControls
              /*  resizeMode="contain" */
              isLooping
            />
          ) : null}
          </View>
          {/* <View style={globalStyles.imageContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
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
          </View> */}

          <Ad />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleNews;

const styles = StyleSheet.create({});
