import { Celebrity } from "../content/types"

export interface UserContextInterface {
  user: User | null;
  userOnboarded: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (user: User) => Promise<boolean>;
  getStorageData: () => void;
  setCategories: (categories: string[]) => Promise<void>;
  addFollow: (id: string) => Promise<void>;
  removeFollow: (id: string) => Promise<void>;
  removeCategory: (id: string) => Promise<void>;
  userCategories: string[];
  passwordReset: (email: string) => Promise<void>;
  userFollows: Celebrity[];
  setUserFollows: React.Dispatch<React.SetStateAction<Celebrity[]>>;
  changeUserPassword: (
    newPassword: string,
    currentPassword: string
  ) => Promise<boolean>;
  errorState: boolean;
  setErrorState: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUserAccount: () => Promise<void>;
}

export interface User {
  id?: string;
  name: string;
  password: string;
  email: string;
  categories?: string[];
  favorites?: string[];
  follows?: string[];
  onboarded?: boolean;
}

/* export enum AccountType {
  basic = "basic",
  family = "family",
} */

/* export interface Account {
  id: string;
  owner: string;
  members: string[];
  type: AccountType;
  freeMonthExpires: null | Date;
  accountExpires: null | Date;
  renewal: Date;
  payment: string;
  notifications: boolean;
} */
