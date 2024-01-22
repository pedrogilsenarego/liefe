import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { State } from "../redux/types";
import { ROUTE_PATHS } from "../routes/constants";
import { CurrentUser } from "../types/user";
import checkUserIsAdmin from "../utils/checkUserIsAdmin";

const useAdminAuth = (props: any) => {
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  const navigate = useNavigate();
  useEffect(
    () => {
      if (!currentUser || !checkUserIsAdmin(currentUser)) {
        navigate(ROUTE_PATHS.HOME);
      }
    },
    // eslint-disable-next-line
    [currentUser]
  );
  return currentUser;
};

export default useAdminAuth;
