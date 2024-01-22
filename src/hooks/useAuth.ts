import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { State } from "../redux/types";

import { ROUTE_PATHS } from "../routes/constants";
import { CurrentUser } from "../types/user";
import checkUser from "../utils/checkUser";

interface Props {
  noAuth?: boolean;
}

const useAuth = (props: Props) => {
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state?.user.currentUser
  );

  const navigate = useNavigate();
  useEffect(
    () => {
      if (props.noAuth) {
        if (checkUser(currentUser)) {
          navigate(ROUTE_PATHS.HOME);
        }
      } else if (!checkUser(currentUser)) {
        navigate(ROUTE_PATHS.HOME);
      }
    },
    // eslint-disable-next-line
    [currentUser]
  );
  return props.noAuth ? true : currentUser;
};

export default useAuth;
