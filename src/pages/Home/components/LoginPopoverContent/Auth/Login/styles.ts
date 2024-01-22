import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    margin: "80px 0px",
    display: "flex",
    flexDirection: "column",
    rowGap: "40px",
    alignItems: "center",
  },
  form: {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },
  register: {
    cursor: "pointer",
    fontWeight: 700,
    textDecoration: "underline",
  },
});

export default useStyles;
