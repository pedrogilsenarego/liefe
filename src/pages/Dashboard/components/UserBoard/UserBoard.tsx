import useUserBoard from "./useUserBoard";

const UserBoard = () => {
  const { currentUser } = useUserBoard();
  return <div>UserBoard: {currentUser?.username}</div>;
};
export default UserBoard;
