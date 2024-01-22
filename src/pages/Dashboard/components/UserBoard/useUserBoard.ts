import { useSelector } from "react-redux";
import { State } from "../../../../redux/types";
import { CurrentUser } from "../../../../types/user";

const useUserBoard = () => {
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  return { currentUser };
};
export default useUserBoard;
