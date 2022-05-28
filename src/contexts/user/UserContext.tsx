import React, { useState, useEffect } from "react";
import axios from "axios";
import { User, UserContextInterface } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Celebrity } from "../content/types";
import { Alert } from "react-native";
import * as API from "./api";
import * as ContentAPI from "../content/api";
import Password from "../../screens/settings/Password";
import { InvalidCredentials, InvalidUser } from "../../errors";

export const UserContext = React.createContext<UserContextInterface | null>(
  null
);

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const [userCategories, setUserCategories] = useState<string[]>([]);
  const [userFollows, setUserFollows] = useState<Celebrity[]>([]);
  const [accountMembers, setAccountMembers] = useState<string[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [errorState, setErrorState] = useState<boolean>(false);
  const [userOnboarded, setUserOnboarded] = useState(false);

  useEffect(() => {
    if (user && user.categories) {
      if (user.categories.length >= 3) {
        setUserCategories(user.categories);
      }

      if (user.onboarded) {
        setUserOnboarded(true);
      }
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    setErrorState(false);
    try {
      console.log("login arguments", email, password);

      const response = await API.login(email, password);
      console.log("API.login response: ", response);
      console.log("API.login response: ", response);

      if (response) {
        setUser(response.user);
        setToken(response.token);

        await AsyncStorage.setItem("token", response.token);
      } else {
        // console.log("RUNS");
        setErrorState(true);
      }
    } catch (error) {
      setErrorState(true);
    }
  };

  const getStorageData = async () => {
    try {
      let userToken = await AsyncStorage.getItem("token");
      // console.log(userToken)
      if (userToken != null) {
        const response = await API.getUser(userToken);

        if (response.data.message === "Unauthorized") {
          Alert.alert("User unauthorized", "Try again", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          setUser(response.data.users);
          setToken(userToken);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* const addMemberAndSendEmail = async (receiver: string) => {
    const owner = { name: user!.name, email: user!.email };

    const response = await API.addMemberAndSendEmail(owner, receiver, token!);

    if (response.success) {
      user?.account.members.push(receiver);
    }

    return response.success as boolean;
  };

  const removeMemberAndSendEmail = async (receiver: string) => {
    const owner = { name: user!.name, email: user!.email };

    const response = await API.removeMemberAndSendEmail(
      owner,
      receiver,
      token!
    );

    if (response.success) {
      user!.account.members = user!.account.members.filter(
        (member) => member !== receiver
      );
      setAccountMembers(user!.account.members);
    }

    return response.success as boolean;
  };
 */

  const register = async (user: User) => {
    try {
      await API.register(user);
      await login(user.email, user.password);

      return true;
    } catch (error) {
      return false;
    }
  };

  const setCategories = async (categories: string[]) => {
    try {
      user?.categories!.push(...categories);
      setUserCategories(user?.categories!);
      await API.setCategories(user?.categories!, token!);
      setUserOnboarded(true);
      await API.onboardUser(token!);
    } catch (error) {
      console.log(error);
    }
  };

  const removeCategory = async (id: string) => {
    if (!user || !user.categories) return;
    try {
      user.categories = user.categories.filter((category) => category !== id);
      setUserCategories(user.categories);
      API.setCategories(user.categories, token!);
    } catch (error) {
      console.log(error);
    }
  };

  const addFollow = async (id: string) => {
    if (!user || !user.follows) return;

    try {
      user.follows.push(id);
      const celeb = await ContentAPI.getCelebrityById(id, token!);

      if (celeb) {
        setUserFollows((prev) => [...prev, celeb]);
      }
      API.setFollows(user!.follows, token!);
    } catch (error) {
      console.log(error);
    }
  };

  const passwordReset = async (email: string) => {
    try {
      const response = await API.passwordReset(email);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFollow = async (id: string) => {
    if (!user || !user.follows) return;

    try {
      user.follows = user.follows.filter((follows) => follows !== id);
      setUserFollows(userFollows.filter((celeb) => celeb.sys.id !== id));
      API.setFollows(user.follows, token!);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
    setToken(null);
    //setUserCategories kan tas bort härifrån i produktion
    setUserCategories([]);
  };

  //Skicka med nuvarande lösenord
  const changeUserPassword = async (
    newPassword: string,
    currentPassword: string
  ) => {
    const success = await API.updateUserPassword(
      newPassword,
      currentPassword,
      token!
    );
    return success;
  };
  const deleteUserAccount = async () => {
    const success = await API.deleteUserAccount(token!);
    if (success) {
      logout();
    }
  };

  const userContext: UserContextInterface = {
    user,
    userOnboarded,
    login,
    logout,
    token,
    register,
    getStorageData,
    setCategories,
    removeCategory,
    userCategories,
    passwordReset,
    deleteUserAccount,
    changeUserPassword,
    addFollow,
    removeFollow,
    userFollows,
    setUserFollows,
    errorState,
    setErrorState,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
