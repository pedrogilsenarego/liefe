import { CurrentUser } from "../../types/user";

export const userTypes = {
  SET_USER: "SET_USER",
  SIGNOUT: "SIGNOUT",
  UPDATE_CURRENT_USER: "UPDATE_CURRENT_USER",
};

export type UserStore = {
  currentUser: CurrentUser | null;
};
