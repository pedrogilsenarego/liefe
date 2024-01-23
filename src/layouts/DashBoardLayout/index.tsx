import AppsBoard from "./components/AppsBoard/AppsBoard";
import UserBoard from "./components/UserBoard/UserBoard";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <UserBoard />
        <AppsBoard />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
