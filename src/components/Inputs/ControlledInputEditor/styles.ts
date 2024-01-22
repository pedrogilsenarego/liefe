import { makeStyles } from "@mui/styles";
import { CSS, Colors, mainColors } from "../../../theme/theme";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    width: "100%",

    maxWidth: "auto",

    "& .MuiInputBase-input": {},
    "& .MuiOutlinedInput-root": {
      "& fieldset": {},
      "&:hover fieldset": {},
      "&.Mui-focused fieldset": {},
    },
  },
});

export default useStyles;
