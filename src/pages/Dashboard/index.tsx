import AppsBoard from "./components/AppsBoard/AppsBoard";
import UserBoard from "./components/UserBoard/UserBoard";

const Dashboard: React.FC = () => {
  return (
    <>
      <UserBoard />
      <AppsBoard />
    </>
  );
};
export default Dashboard;
