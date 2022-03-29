import { StyleSheet } from "react-native";
import { color } from "./baseStyles";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  textInput: {
    backgroundColor: color.white,
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: 300,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
    backgroundColor: color.pink,
  },
  headlineText: {
    fontFamily:'Avenir',  
    fontSize:20,
  },
  gradient: {
    flex: 1,
    zIndex: 10,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 260,
    borderRadius: 5,
  },
  headline: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    paddingHorizontal: 5,
    paddingBottom: 5,
    marginTop: -20,
    zIndex: 20,
  },
  featureImage: {
    flex: 1,
    borderRadius: 5,
    width: '100%',
    height: 260,
    zIndex: 0,
  },
  articleList: {
    paddingTop: 10,
    width: '100%',
  },
  articleCard: {
    borderRadius: 5,
    marginBottom: 10,
    height: 240,
    width: '100%',
  },
});