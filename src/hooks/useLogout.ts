import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../redux/user/actions";
import { ROUTE_PATHS } from "../routes/constants";

export const useSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignOut = useCallback(() => {
    dispatch(signOut());
    navigate(ROUTE_PATHS.HOME);
  }, [navigate, dispatch]);

  return { onSignOut };
};
