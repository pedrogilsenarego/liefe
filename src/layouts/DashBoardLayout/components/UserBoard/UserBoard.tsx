import Paper from "../../../../components/Ui/Paper";
import useUserBoard from "./useUserBoard";

const UserBoard = () => {
  const { currentUser } = useUserBoard();
  return (
    <Paper paperStyles={{ height: "100%" }}>
      UserBoard: {currentUser?.username}
    </Paper>
  );
};
export default UserBoard;
