import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSignOut } from "../../../../hooks/useLogout";
import { State } from "../../../../redux/types";
import { ROUTE_PATHS } from "../../../../routes/constants";
import { Colors } from "../../../../theme/theme";
import { i18n } from "../../../../translations/i18n";
import { CurrentUser } from "../../../../types/user";
import Login from "./Auth/Login";
import RecoverPassword from "./Auth/RecoverPassword";
import Register from "./Auth/Register";

const LoginPopoverContent = ({ handleClose }: any) => {
  const navigate = useNavigate();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const { onSignOut } = useSignOut();

  const [mode, setMode] = useState<"login" | "register" | "recover">("login");

  const render = () => {
    switch (mode) {
      case "login":
        return <Login setMode={setMode} />;
      case "register":
        return <Register setMode={setMode} />;
      case "recover":
        return <RecoverPassword />;
      default:
        return <Login setMode={setMode} />;
    }
  };

  return (
    <div
      //onMouseLeave={handleClose}
      style={{
        margin: "20px 50px",
        display: "flex",
        flexDirection: "column",
        rowGap: "12px",
        minWidth: "200px",
        justifyContent: "end",
        alignItems: "end",
      }}
    >
      {render()}
    </div>
  );
};

export default LoginPopoverContent;
