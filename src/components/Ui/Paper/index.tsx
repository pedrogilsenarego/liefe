import { Paper as PaperMUI } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const Paper = ({ children }: Props) => {
  return <PaperMUI sx={{ padding: "20px" }}>{children}</PaperMUI>;
};

export default Paper;
