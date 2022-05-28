import { Platform } from "react-native";
import axios from "axios";
import { User } from "./types";


const HOST =  "10.0.2.2";
const API = axios.create({ baseURL: `http://192.168.1.253:3000/api/users` });

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

export const register = async (user: User) => {
  try {
    await API.post("/register", {
      name: user.name,
      email: user.email,
      password: user.password,
    });
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
export const onboardUser = async (token: string) => {
  try {
    const response = await API.put(
      "/update",
      { onboarded: true },
      { headers: { authorization: `Bearer ${token}` } }
    );
    return {
      response,
    };
  } catch (error) {
    console.log(error);
  }
};
//delete user account, await remove from backend
export const deleteUserAccount = async (token: string) => {
  try {
    await API.delete("/remove", {
      headers: { authorization: `Bearer ${token}` },
    });
    return true;
  } catch (error) {
    return false;
  }
};
