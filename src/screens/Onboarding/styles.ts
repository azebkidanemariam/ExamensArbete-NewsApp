import { StyleSheet } from "react-native";
import { color } from "../../styles/baseStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    backgroundColor: color.lightGrey,
  },
  header: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    paddingTop: 60,
    paddingBottom: 2,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    paddingBottom: 10,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 15,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  searchInput: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 15,
    borderColor: "#CECECE",
    borderWidth: 1,
    borderRadius: 25,
    shadowColor: "#171717",
    shadowOffset: { width: -0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    margin: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  active: {
    backgroundColor: color.pink,
    borderColor: color.pink,
  },
  inactive: {
    backgroundColor: "#FFF",
    borderColor: "#CECECE",
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textActive: {
    color: "white",
  },
  textInactive: {
    color: "black",
  },
  delimiterActive: {
    marginRight: 4,
    color: "#FFF",
    fontSize: 15,
    marginBottom: 2,
    width: 10,
  },
  delimiterInactive: {
    marginRight: 4,
    fontSize: 15,
    marginBottom: 2,
    width: 10,
  },
});
