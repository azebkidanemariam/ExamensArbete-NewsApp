import { Platform } from "react-native";
import axios from "axios";
import { Account } from './types';

const HOST = Platform.OS === "ios" ? "localhost" : "10.0.2.2";
const API = axios.create({ baseURL: `http://${HOST}:3000/api/users` });

export const setCategories = async (categories: string[], token: string) => {
  try {
    const response = await API.put(
      "/update",
      { categories },
      { headers: { authorization: `Bearer ${token}` } }
    );
    return {
      response,
    };
  } catch (error) {
    console.log(error);
  }
};

export const setFollows = async (follows: string[], token: string) => {
  try {
    const response = await API.put(
      "/update",
      { follows },
      { headers: { authorization: `Bearer ${token}` } }
    );
    return {
      response,
    };
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await API.post("/login", {
      email,
      password,
    });

    return {
      user: response.data.user,
      token: response.data.token,
    };
  } catch (error) {
    return false;
  }
};

export const addMemberAndSendEmail = async (
  owner: { name: string; email: string },
  receiver: string,
  token: string
) => {
  try {
    const response = await API.post(
      "/member",
      {
        owner,
        receiver,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    // TODO
    // handle error
  }
};

export const passwordReset = async (email: string) => {
  const response = await API.post("/passwordreset", { email });
  return response;
};

export const register = async (
  name: string,
  email: string,
  password: string,
  categories: object,
  favorites: object,
  account: object,
  gender: string,
  dob: Date
) => {
  try {
    await API.post("/register", {
      name,
      email,
      password,
      categories,
      favorites,
      follows: [],
      account,
      dob,
      gender,
    });
    console.log("User has successfully register");
  } catch (error) {
    console.log(error);
  }
};

export const removeMemberAndSendEmail = async ( owner: { name: string; email: string },
  receiver: string,
  token: string
) => {
  try {
    const response = await API.delete("/member", {
      data: { owner, receiver },
      headers: { authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    // TODO
    // Handle error
  }
};

export const getUser = async (token: string) => {
  const response = await API.get("/", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const updateUserPassword = async (
  password: string,
  currentPassword: string,
  token: string
) => {
  try {
    await API.put(
      "/update",
      { password, currentPassword },
      { headers: { authorization: `Bearer ${token}` } }
    );
    return true;
  } catch (error) {
    return false;
  }
};
