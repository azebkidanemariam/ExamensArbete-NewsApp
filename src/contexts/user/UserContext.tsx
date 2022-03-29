import React, { Children, useState } from "react";
import axios from "axios";

export interface User {
  name: string;
  email: string;
}

export interface UserContextInterface {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const UserContext = React.createContext<UserContextInterface | null>(
  null
);

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const login = async (email: string, password: string) => {
    console.log("In UserContext Login");

    try {
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });
      setUser(response.data.user);
      setToken(response.data.token);
    } catch (error) {}
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const userContext: UserContextInterface = { user, login, logout, token };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;