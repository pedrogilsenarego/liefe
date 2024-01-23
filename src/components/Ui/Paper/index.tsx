import { CSSProperties } from "@mui/styles";

interface Props {
  children: React.ReactNode;
  paperStyles?: CSSProperties;
}

const Paper = ({ children, paperStyles }: Props) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "4px",

        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        ...paperStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
