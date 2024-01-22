import { Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <Typography
      style={{
        fontSize: "25px",
        fontWeight: 700,
      }}
    >
      {children}
    </Typography>
  );
};

export default Title;
