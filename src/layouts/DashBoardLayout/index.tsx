import Paper from "../../components/Ui/Paper";
import AddTransaction from "./components/AddTransaction";
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", columnGap: "20px", alignItems: "center" }}
          >
            <UserBoard />
            <AddTransaction />
          </div>
          <AppsBoard />
        </div>
        <div style={{ marginTop: "20px" }}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
