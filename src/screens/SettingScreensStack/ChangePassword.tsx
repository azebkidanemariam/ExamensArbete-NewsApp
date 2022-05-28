import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  Pressable,
  Modal,
} from "react-native";

import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user/UserContext";
import Button from "../../components/Button";
import globalStyles from "../../styles/styles";
import { schema } from "../../utils/validate";
import { useNavigation } from "@react-navigation/native";

const ChangePassword : React.FC = () => {
  const { changeUserPassword } = useContext(UserContext)!;

  const navigation = useNavigation();

  const [buttonText, setButtonText] = useState("SPARA");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSetPassword = async (text: string) => {
    setNewPassword(text);
    const valid = await schema.isValid({ password: newPassword });
    if (!valid) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
    }
  };

  const handleSubmit = async () => {
    setButtonText("Saving...");
    const success = await changeUserPassword(newPassword, currentPassword);
    console.log(success);

    if (success) {
      setPasswordChanged(true);
    }
    setShowModal(true);
    setButtonText("Save");
  };

  const handleCloseModal = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setShowModal(false);
    if (passwordChanged) {
      //@ts-ignore
      navigation.navigate("Meny");
    }
  };

  const passwordCompare = () => {
    return newPassword === confirmNewPassword;
  };

  const disableButton = () => {
    if (
      passwordCompare() &&
      confirmNewPassword.length > 7 &&
      currentPassword.length > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <View
        style={[
          globalStyles.container,
          { justifyContent: "flex-start", marginTop: 50 },
        ]}
      >
        <View style={styles.inputRow}>
          <TextInput
            style={globalStyles.textInput}
            placeholder="PREVIOUS PASSWORD"
            placeholderTextColor="#706F70"
            // secureTextEntry
            autoCapitalize="none"
            value={currentPassword}
            onChangeText={(text) => {
              setCurrentPassword(text);
            }}
          />
          <Pressable onPress={() => setCurrentPassword("")}>
            <Image
              source={require("../../../assets/images/circle-x.png")}
              style={styles.inputImage}
            />
          </Pressable>
        </View>
        <Text>
          The new password must be at least 8 characters long and must
          contain numbers or letters!
        </Text>

        <View style={styles.inputRow}>
          <TextInput
            style={[
              globalStyles.textInput,
              invalidPassword ? styles.redBorder : null,
              !invalidPassword && newPassword.length
                ? styles.greenBorder
                : null,
            ]}
            placeholder="NEW PASSWORD"
            placeholderTextColor="#706F70"
            // secureTextEntry
            value={newPassword}
            onChangeText={(text) => handleSetPassword(text)}
            autoCapitalize="none"
          />
          <Pressable onPress={() => setNewPassword("")}>
            <Image
              source={require("../../../assets/images/circle-x.png")}
              style={styles.inputImage}
            />
          </Pressable>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={[
              globalStyles.textInput,
              !passwordCompare() ? styles.redBorder : null,
              passwordCompare() && confirmNewPassword.length > 7
                ? styles.greenBorder
                : null,
            ]}
            placeholder="CONFIRM NEW PASSWORD"
            placeholderTextColor="#706F70"
            // secureTextEntry
            value={confirmNewPassword}
            onChangeText={(text) => setConfirmNewPassword(text)}
            autoCapitalize="none"
          />
          <Pressable onPress={() => setConfirmNewPassword("")}>
            <Image
              source={require("../../../assets/images/circle-x.png")}
              style={styles.inputImage}
            />
          </Pressable>
        </View>
        <Button
          text={buttonText}
          onPress={handleSubmit}
          /* disabled={disableButton()} */
         /*  bottom */
        />
      </View>
      <Modal visible={showModal} animationType="slide">
        <View style={globalStyles.container}>
          <Text>
            {passwordChanged
              ? "Lösenordet har ändrats!"
              : "Lösenordet gick ej att ändra - kontrollera ditt nuvarande lösenord."}
          </Text>
          <Button text="OK" onPress={handleCloseModal} 
          /* bottom  */
          />
        </View>
      </Modal>
    </>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    width: "100%",
  },
  redBorder: {
    borderWidth: 2,
    borderColor: "red",
  },
  greenBorder: {
    borderWidth: 2,
    borderColor: "green",
  },
  inputRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  inputImage: {
    width: 15,
    height: 15,
    marginLeft: -25,
    zIndex: 1,
    opacity: 0.5,
  },
});