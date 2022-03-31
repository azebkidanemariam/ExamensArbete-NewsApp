import { Celebrity } from "../content/types"

export interface UserContextInterface {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    name: string,
    email: string,
    password: string,
    categories: object,
    favorites: object,
    account: object,
    gender: string,
    dob: Date
  ) => Promise<void>;
  getStorageData: () => void;
  setCategories: (categories: string[]) => Promise<void>;
  addFollow: (id: string) => Promise<void>;
  removeFollow: (id: string) => Promise<void>;
  removeCategory: (id: string) => Promise<void>;
  userCategories: string[];
  passwordReset:(email: string) => Promise<void>;
  addMemberAndSendEmail: (receiver: string) => Promise<boolean>
  removeMemberAndSendEmail: (receiver: string) => Promise<boolean>
  accountMembers: string[]
  setAccountMembers: React.Dispatch<React.SetStateAction<string[]>>
  userFollows: Celebrity[],
  setUserFollows: React.Dispatch<React.SetStateAction<Celebrity[]>>
  changeUserPassword: (
    newPassword: string,
    currentPassword: string
  ) => Promise<boolean>;
  errorState: boolean;
  setErrorState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  categories: string[];
  favorites: string[];
  follows: string[];
  dob: object;
  account: Account;
  gender: string;
}

export enum AccountType {
  basic = "basic",
  family = "family",
}

export interface Account {
  id: string;
  owner: string;
  members: string[];
  type: AccountType;
  freeMonthExpires: null | Date;
  accountExpires: null | Date;
  renewal: Date;
  payment: string;
  notifications: boolean;
}
