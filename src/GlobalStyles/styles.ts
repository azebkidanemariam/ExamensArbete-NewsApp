import { StyleSheet } from "react-native";
import { color } from "./theme";

export default StyleSheet.create({
  articleList: {
    paddingTop: 10,
    width: "100%",
  },
  articleSingle: {
    backgroundColor: color.backgroudBlue,
    marginBottom: 10,
    marginTop: 10,
    padding:10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor:color.backgroudBlue,
    /* alignItems: "center", */
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  featureImage: {
    flex: 1,
    borderRadius: 5,
    width: '100%',
    resizeMode: "cover",
    height: 300,
    zIndex: 0,
    
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
  headline: {
    color: color.blue,
    fontSize: 21,
    fontWeight: "bold",
    paddingHorizontal: 5,
    paddingBottom: 5,
    marginTop: 20,
    marginBottom: 5,
    lineHeight:30,
    letterSpacing:0.1
  },
  image: {
    /* marginVertical: 10, */
    /* paddingHorizontal: 25, */
    paddingVertical: 20,
    height: 207,
    width: 168,
    borderRadius: 13,
    alignSelf: "flex-start",
    marginStart:2,
  },
  imageContainer:{
    marginVertical: 0,
  },
  text: {
    color: "#000",
  },
  title: {
    color:color.red,
    alignSelf:'flex-start',
    fontSize:17,
    fontWeight:"bold",
    paddingBottom:5,
  },
  textInput: {
    backgroundColor: color.white,
    width: "90%",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderColor: color.lightGrey,
    borderWidth: 2,
    borderRadius: 50,
    alignSelf:'center'
  },
  preamble: {
    lineHeight:20,
    letterSpacing:0.1,
    fontWeight: "600",
    fontSize: 13,
    fontFamily: "Arial",
    marginTop: 5,
    marginBottom: 5,
    /* paddingHorizontal: 5, */
    paddingBottom: 2,
    color: color.textlightgreen,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "normal",
    /* paddingHorizontal: 20, */
    color: color.textlightgreen,
    lineHeight: 25,
    letterSpacing: 0.1,
    fontFamily: "Arial",
  },
  resetPassword: {
    marginTop: 15,
    color: color.pink,
    fontWeight: "700",
  },
  video: {
    height: 275,
    width: 335,
    borderRadius: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    /* alignSelf: "flex-start", */
  }
});
