import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../routes/constants";
import useUserBoard from "./useUserBoard";

const UserBoard = () => {
  const { currentUser } = useUserBoard();
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => navigate(ROUTE_PATHS.DASHBOARD)}
      style={{
        fontSize: "30px",
        textTransform: "capitalize",
        cursor: "pointer",
      }}
    >
      {currentUser?.username}
    </Typography>
  );
};
export default UserBoard;
