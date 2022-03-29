import { Text, View, Image, FlatList, ListRenderItem } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ContentContext } from '../../contexts/content/ContentContext'
import { Article } from '../../contexts/content/types'
import globalStyles from '../../styles/styles'

const Home: React.FC = () => {
  const { articles } = useContext(ContentContext)!

  const renderItem: ListRenderItem<Article> = ({ item }) => {

    if(item.fields.featureImage) {
      return(

    <View style={[globalStyles.articleCard]}>
      <LinearGradient
        style={globalStyles.gradient}
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        locations={[0.6, 1]}
      />
      <>
        <Image
          style={globalStyles.featureImage}
          source={{
            uri: `https:${item.fields.featureImage.fields.file.url}`,
          }}
        />
        <Text style={globalStyles.headline}>{item.fields.headline}</Text>
      </>
    </View>
      )
    } else return null
  }
  

  return (
    <View style={globalStyles.container}>
      {articles && articles.length ? (
        <FlatList
          style={globalStyles.articleList}
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item) => item.sys.id}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  )
}

export default Home