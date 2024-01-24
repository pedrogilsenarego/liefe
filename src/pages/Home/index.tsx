/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State } from "../../redux/types";
import { ROUTE_PATHS } from "../../routes/constants";
import { CurrentUser } from "../../types/user";
import LoginPopoverContent from "./components/LoginPopoverContent";

const Home = () => {
  const navigate = useNavigate();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  useEffect(() => {
    if (currentUser) {
      navigate(ROUTE_PATHS.DASHBOARD);
    }
  }, [currentUser]);

  return (
    <div>
      <h1>
        <LoginPopoverContent />
      </h1>
    </div>
  );
};
export default Home;
