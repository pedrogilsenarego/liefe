import { Select as MuiSelect, styled } from "@mui/material";
import { Colors } from "../../../theme/theme";

interface Props {
  maxWidth?: string;
}

export const Select = styled(MuiSelect)(({ maxWidth }: Props) => ({
  width: "100%",
  backgroundColor: "lightGrey",
  borderRadius: "10px",
  border: `solid 2px ${Colors.blackish}`,
  maxWidth: maxWidth || "auto",
  "& .MuiSelect-select": {},
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: Colors.grey,
      borderRadius: "10px",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: Colors.redish,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.blackish,
    },
  },
}));
