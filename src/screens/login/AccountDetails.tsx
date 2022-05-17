import React, { useContext, useState, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Platform,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { UserContext } from "../../contexts/user/UserContext";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { schema } from "../../utils/validate";
import Recaptcha, { RecaptchaHandles } from "react-native-recaptcha-that-works";
import CheckBox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";
import AuthButtons from "../../components/AuthButtons";
import RadioButton from "../../components/RadioButton";
import Separator from "../../components/Separator";
import Logo from "../../components/Logo";
import ButtonComponent from "../../components/Button";
import globalStyles from "../../styles/styles";
import styles from "./styles";

const AccountDetails: React.FC = () => {
  const recaptcha = useRef<RecaptchaHandles>();
  const navigation = useNavigation();
  const { register } = useContext(UserContext)!;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectGender, setSelectGender] = useState();
  const [gender, setGender] = useState("");
  const [account, setAccount] = useState({
    type: "",
    notification: false,
    expires: 1233333,
    payment: "",
  });

  // ----------------- States for validations -----------------
  const [invalidName, setInvalidName] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  // ----------------- States for show icons in password and confirm password fields -----------------
  const [showCheck, setShowCheck] = useState(false);
  const [showCross, setShowCross] = useState(false);

  // ----------------- State for checkbox select -----------------
  const [isSelected, setIsSelected] = useState(false);
  
  // ----------------- State for DatePicker -----------------
  const [dob, setDob] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [showDate, setShowDate] = useState(false);

  const handleDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dob;
    setShowDate(Platform.OS === "ios");
    setDob(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShowDate(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  // ----------------- ReCaptcha ----------------

  const sendCaptcha = () => {
    console.log("send!");
    recaptcha.current?.open();
  };

  const onVerify = (token: string) => {
    console.log("success!", token);
  };

  const onExpire = () => {
    console.warn("expired!");
  };

  // ----------------- Validations ----------------
  const checkPassword = (confirmPass: string) => {
    if (password === confirmPass) {
      setShowCheck(true);
      // setShowCross(false);
    } else if (confirmPass != password) {
      setShowCheck(false);
      setShowCross(true);
    }
  };

  const handlePassword = async (text: string) => {
    setPassword(text);
    const valid = await schema.isValid({ password: password });
    if (!valid) {
      setInvalidPassword(true);
    } else {
      setInvalidPassword(false);
      checkPassword(text);
    }
  };

  const handleConfirmPassword = async (text: string) => {
    setConfirmPassword(text);
    const valid = await schema.isValid({ password: confirmPassword });
    if (!valid) {
      setInvalidPassword(true);
      setShowCross(true);
    } else {
      setInvalidPassword(false);
      setShowCross(false);
      checkPassword(text);
    }
  };

  const handleValidEmail = async (text: string) => {
    setEmail(text);
    const valid = await schema.isValid({ email: email });
    if (!valid) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  };

  const handleValidName = async (text: string) => {
    setName(text);
    const valid = await schema.isValid({ name: name });
    if (!valid) {
      setInvalidName(true);
    } else {
      setInvalidName(false);
    }
  };

  // ----------------- Register a new user ----------------
  const handleRegister = () => {
    register(
      name,
      email,
      password,
      categories,
      favorites,
      account,
      gender,
      dob
    );
    //@ts-ignore
    navigation.navigate("Logga in");
  };


  return (
    <ScrollView>
      <SafeAreaView>
        <View style={[globalStyles.container, styles.container]}>
          <Logo width={90} height={45} />
          <AuthButtons
            paddingVertical={8}
            onPress={handleRegister}
            source={require("../../../assets/facebook.png")}
            title={"registrera dig med Facebook"}
            google={false}
            facebook={true}
          />
          <AuthButtons
            paddingVertical={8}
            onPress={handleRegister}
            source={require("../../../assets/google.png")}
            title={"registrera dig in med google"}
            google={true}
            facebook={false}
          />
          <Separator />

          <View style={styles.textRegister}>
            <Text style={styles.boldText}>
              Registrera dig med din e-postadress
            </Text>
          </View>

          {/* ----------------- Name Input ---------------- */}

          <View>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={[
                  globalStyles.textInput,
                  invalidName ? styles.redBorder : null,
                  !invalidName && name.length ? styles.greenBorder : null,
                ]}
                value={name}
                placeholder="Namn"
                placeholderTextColor="#706F70"
                onChangeText={(text) => {
                  handleValidName(text);
                }}
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* ----------------- Email Input ---------------- */}

          <View>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={[
                  globalStyles.textInput,
                  invalidEmail ? styles.redBorder : null,
                  !invalidEmail && email.length ? styles.greenBorder : null,
                ]}
                value={email}
                placeholder="E-postadress"
                placeholderTextColor="#706F70"
                onChangeText={(text) => handleValidEmail(text)}
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* ----------------- Password Input ---------------- */}

          <View>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={[
                  globalStyles.textInput,
                  invalidPassword ? styles.redBorder : null,
                  !invalidPassword && password.length
                    ? styles.greenBorder
                    : null,
                ]}
                value={password}
                placeholder="Lösenord"
                placeholderTextColor="#706F70"
                onChangeText={(text) => {
                  handlePassword(text);
                }}
                autoCapitalize="none"
              />
              {showCheck && (
                <Image
                  source={require("../../../assets/images/check-green.png")}
                  style={styles.inputIcon}
                />
              )}
            </View>
            <Text style={styles.passwordConditions}>
              Ditt lösenord måste bestå av minst 8 tecken och får endast
              innehålla siffror eller bokstäver.
            </Text>
          </View>

          {/* ----------------- Confirm Password Input ---------------- */}

          <View style={styles.inputWithIcon}>
            <TextInput
              style={[
                globalStyles.textInput,
                invalidPassword ? styles.redBorder : null,
                !invalidPassword && confirmPassword.length
                  ? styles.greenBorder
                  : null,
              ]}
              value={confirmPassword}
              placeholder="Bekräfta ditt lösenord"
              placeholderTextColor="#706F70"
              onChangeText={(text) => {
                handleConfirmPassword(text);
              }}
              autoCapitalize="none"
              // secureTextEntry
            />
            {showCheck && (
              <Image
                source={require("../../../assets/images/check-green.png")}
                style={styles.inputIcon}
              />
            )}
            {showCross && (
              <Image
                source={require("../../../assets/images/cross.png")}
                style={styles.inputIcon}
              />
            )}
          </View>

          {/* ----------------- Date Picker ---------------- */}

          <View style={styles.linkContainer}>
            <Text>Ange ditt födelsedatum </Text>
            <Pressable onPress={showDatepicker}>
              <Text style={styles.link}>tryck här</Text>
            </Pressable>
          </View>

          {showDate && (
            <View style={styles.datePicker}>
              <DateTimePicker
                testID="dateTimePicker"
                minimumDate={new Date(1922, 0, 1)}
                maximumDate={new Date()}
                value={dob}
                locale="swe-SWE"
                //@ts-ignore
                mode={mode}
                display="spinner"
                onChange={handleDate}
                style={styles.datePicker}
              />
            </View>
          )}

          {/* ----------------- Select Gender ---------------- */}

          <RadioButton
            selected={selectGender}
            options={["man", "kvinna", "ickebinär"]}
            onChangeSelect={(opt, index) => {
              //@ts-ignore
              setSelectGender(index);
              setGender(opt);
            }}
          />

          {/* ----------------- Checkbox ---------------- */}

          <View style={styles.checkBoxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setIsSelected}
              style={styles.checkbox}
              color={isSelected ? "#D7097A" : undefined}
            />
            <Text style={styles.conditions}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero
            </Text>
          </View>

          {/* ----------------- Recatcha ---------------- */}

          <Recaptcha
            //@ts-ignore
            ref={recaptcha}
            lang="swe-SWE"
            siteKey="6LddLKkeAAAAACRrqrtpwzHlDYmcftK4-PYV7RlK"
            baseUrl="http://www.recaptcha.net"
            size="normal"
            theme="light"
            onExpire={onExpire}
            onVerify={onVerify}
          />

          <ButtonComponent
            text="I'm not a robot"
            onPress={sendCaptcha}
            disabled={false}
            style={undefined}
          />

          {/* ----------------- Conditions ---------------- */}

          <View style={styles.textContainer}>
            <Text style={styles.boldText}>
              Genom att klicka på registrerade såsom tycker du till 24gossip
            </Text>

            <Pressable>
              <Text style={styles.link}> användarvillkor </Text>
            </Pressable>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.boldText}>
              Om du vill veta mer om hur vi använder data
            </Text>
            <Pressable>
              <Text style={styles.link}>tryck här</Text>
            </Pressable>
          </View>

          {/* ----------------- Create/Register a new user ---------------- */}

          <ButtonComponent
            disabled={!isSelected}
            text="SKAPA KONTO"
            onPress={() => {
              handleRegister();
            }}
            style={undefined}
          />

          <View style={styles.lineContainer}>
            <Text style={styles.boldText}>Har du redan ett konto? </Text>
            <Pressable
              onPress={() =>
                //@ts-ignore
                navigation.navigate("Logga in")
              }
            >
              <Text style={styles.link}>Logga in</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AccountDetails;