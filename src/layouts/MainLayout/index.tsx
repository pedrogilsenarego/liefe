import { mainColors } from "../../theme/theme";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

const HomepageLayout = ({ children }: HomepageLayoutProps) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        padding: "20px",
        backgroundColor: mainColors.primary[400],
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default HomepageLayout;
