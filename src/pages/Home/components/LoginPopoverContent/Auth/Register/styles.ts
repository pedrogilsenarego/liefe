import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    margin: "80px 0px",
    display: "flex",
    flexDirection: "column",
    rowGap: "60px",
    alignItems: "center",
  },
  form: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    rowGap: "40px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
  register: {
    cursor: "pointer",
  },
});

export default useStyles;
