import { Typography } from "@mui/material";
import useUserBoard from "./useUserBoard";

const UserBoard = () => {
  const { currentUser } = useUserBoard();
  return (
    <Typography style={{ fontSize: "30px", textTransform: "capitalize" }}>
      {currentUser?.username}
    </Typography>
  );
};
export default UserBoard;
