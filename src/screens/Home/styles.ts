import { color } from "../../styles/baseStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEE9F5',
    alignItems: "center",
    justifyContent: "center",
    
  },
  featureImage: {
    height: 563,
    width: "100%",
    aspectRatio: 0.7,
  },

  video: {
    height: 275,
    width: 367,
    borderRadius: 10,
  },

  celebrityBio: {
    fontFamily: "Arial",
    fontSize: 16,
    alignSelf: "flex-start",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
    paddingBottom: 20,
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: color.blue_facebook,
    borderRadius: 8,
    width: "20%",
    height: 30,
    paddingVertical: 5,
    marginStart: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  btnOrange: {
    borderRadius: 8,
    width: "30%",
    height: 30,
    paddingVertical: 5,
    marginStart: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },

  btnText: {
    fontSize: 13,
    alignItems: "center",
    justifyContent: "center",
    color: color.white,
    fontFamily: "Arial",
  },
  iconWrapper: {
    alignItems: "center",
    marginRight: 15,
    width: 30,
  },
  menuIcon: {
    height: 10,
    width: 15,
    padding: 7,
    marginEnd: 5,
  },
  Wrapper: {
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "pink",
  },
  preamble: {
    fontWeight: "normal",
    fontSize: 13,
    fontFamily: "Arial",
    lineHeight:15,
    letterSpacing:0.2,
    marginTop: 5,
    marginBottom: 20,
  
    paddingBottom: 20,
  },
  articleDivider: {
    alignSelf: "center",
    borderBottomColor: color.white,
    marginBottom: 20,
    height: 20,
    borderBottomWidth: 7,
    width: "100%",
    
  },
  headText:{

    alignSelf:'flex-start',
    paddingTop:20,
    paddingBottom:10,
    color:color.lightgreen,
    fontSize:17,
    fontWeight:"bold",
    
  }
});
export default styles;
