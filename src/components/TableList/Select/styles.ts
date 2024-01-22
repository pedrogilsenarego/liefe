import { TextField as MuiTextField, styled } from "@mui/material";
import { Colors } from "../../../theme/theme";

interface Props {
  maxWidth?: string;
  height?: string;
}

export const TextField = styled(MuiTextField)(
  ({ maxWidth, height }: Props) => ({
    width: "100%",
    backgroundColor: "white",
    borderRadius: "4px",
    maxWidth: maxWidth || "auto",
    "& .MuiInputBase-input": {
      color: "black",
      height: height || "20px", // Set the height here
    },
    "& .MuiInputBase-root": {
      height: height || "40px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: Colors.black[40025],
        borderRadius: "4px",
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: Colors.black[40050],
      },
      "&.Mui-focused fieldset": {
        borderColor: Colors.black[400],
      },
    },
  })
);
