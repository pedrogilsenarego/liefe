import { CurrentUser } from "../types/user";

const checkUserIsAdmin = (currentUser: CurrentUser) => {
  if (!currentUser || !Array.isArray(currentUser.role)) return false;
  const { role } = currentUser;
  if (role.includes("ADMIN")) return true;

  return false;
};

export default checkUserIsAdmin;
