import { StyleSheet } from "react-native";
import { color } from "../../styles/baseStyles";

export default StyleSheet.create({
  logoView: {
    marginBottom: 20,
  },

  lineContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },

  lineContainerRegister: {
    marginVertical: 25,
  },

  line: {
    borderColor: color.darkGrey,
    borderWidth: 0.5,
    width: "30%",
    marginHorizontal: 20,
  },

  resetPassword: {
    marginTop: 15,
    color: color.pink,
    fontWeight: "700",
  },

  container: {
    paddingTop: 30,
    backgroundColor:'#CFD8DC'
  },

  textRegister: {
    marginBottom: 10,
  },

  textContainer: {
    marginTop: 15,
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
  },

  checkBoxContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },

  conditions: {
    width: "90%",
  },

  datePicker: {
    width: "100%",
    height: 90,
  },

  checkbox: {
    borderRadius: 5,
    borderWidth: 1,
    borderBottomColor: "#959496",
    marginHorizontal: 10,
  },

  link: {
    color: color.pink,
    fontWeight: "700",
  },

  linkContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },

  boldText: {
    textAlign: "center",
    color: color.black,
    fontWeight: "700",
  },

  planCard: {
    backgroundColor: color.white,
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10,
    maxWidth: "100%",
  },

  planCardText: {
    marginBottom: 2,
  },

  planCardTitle: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 20,
    paddingHorizontal: 30,
  },

  planCardIcon: {
    marginRight: 10,
  },

  planCardDivider: {
    alignSelf: "center",
    borderBottomColor: color.borderBottomGrey,
    marginBottom: 20,
    height: 20,
    borderBottomWidth: 1,
    width: "90%",
  },

  planCardDescription: {
    paddingHorizontal: 30,
  },

  planCardUspList: {
    paddingHorizontal: 30,
  },

  planCardUspRow: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
  },

  paymentCard: {
    width: "100%",
    borderColor: "#aaa",
    borderWidth: 1,
  },

  label: {
    marginVertical: 5,
    fontWeight: "500",
  },

  paymentInputView: {
    width: "100%",
  },

  paymentHeader: {
    width: "98%",
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  conditionsView: {
    marginTop: 15,
    flexDirection: "row",
  },

  conditionsLink: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  textInfo: {
    marginHorizontal: 8,
    marginTop: 5,
    marginBottom: 3
  },

  cardDate: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardDateInput: {
    width: "48%",
  },

  inputWithIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute",
    right: 10,
    width: 15,
    margin: 5,
    height: 15,
  },
  redBorder: {
    borderWidth: 2,
    borderColor: "#D7097A",
  },
  greenBorder: {
    borderWidth: 2,
    borderColor: "green",
  },

  choosePlanScreen : {
    paddingHorizontal: 10
  },

  passwordConditions: {
    paddingHorizontal: 8
  }
});
