import { StyleSheet } from "react-native";
import { color } from "./baseStyles";

export default StyleSheet.create({
  articleListimg: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    margin: 20,
    height: 130,
    width: 150,
    padding: 0,
    marginStart: 10,
    borderBottomEndRadius:10,
    borderTopStartRadius:10,
    alignSelf: "flex-end",
  },
  articleList: {
    paddingTop: 5,
    width: "100%",
  },
  articleCard: {
    borderRadius: 5,
    marginBottom: 10,
    height: 240,
    width: "100%",
  },
  Articlecontainer: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    width: 300,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
    backgroundColor: color.pink,
  },
  body: {
    fontSize: 16,
    fontWeight: "normal",
    paddingHorizontal: 20,
    color: color.lightgreen,
    lineHeight: 25,
    letterSpacing: 0.1,
    fontFamily: "Arial",
  },

  container: {
    flex: 1,
    backgroundColor: color.skyBlue,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  featureImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  headlineText: {
    fontFamily: "Avenir",
    fontSize: 27,
    fontWeight: "bold",
    color: color.green,
  },
  headline: {
    color: color.black,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingBottom: 5,
    marginTop: 20,
    marginBottom:5,
    lineHeight:30,
    letterSpacing:0.5,
  },
  headlineMoreArticle: {
    color: color.lightgreen,
    fontSize: 16,
    fontWeight: "800",
    paddingHorizontal: 20,
    paddingBottom: 5,
    marginTop: -158,
  },
  image: {
    paddingVertical: 20,
    marginVertical: 10,
    alignSelf: "center",
    flexDirection: "row",
    height: 307,
    width: 189,
    padding: 0,
    margin: 0,
  },
  textInput: {
    backgroundColor: color.white,
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#aaa",
    borderWidth: 2,
    borderRadius: 5,
  },
 
  gradient: {
    flex: 1,
    zIndex: 10,
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 260,
    borderRadius: 5,
  },
 
  moreArticleContainer: {
    width: 210,
    height: 100,
    
  },
  moreArticle: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 10,
    paddingHorizontal: 25,
  },


  
  preambel: {
    fontSize: 10,
    fontFamily: "Arial",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 5,
    color:'black'
  },
  wrapper: {
    backgroundColor:color.white,
    flex:1
  }
});