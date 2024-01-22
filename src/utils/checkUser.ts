import { CurrentUser } from "../types/user";

const checkUser = (currentUser: CurrentUser | null) => {
  if (!currentUser) return false;
  return true;
};

export default checkUser;
