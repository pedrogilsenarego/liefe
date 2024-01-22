import { makeStyles } from "@mui/styles";

//interface Props extends CSSProperties {}

const useStyles = makeStyles({
  root: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    rowGap: "120px",
    alignItems: "center",
  },
  form: {
    width: "500px",
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
    fontWeight: 700,
    textDecoration: "underline",
  },
});

export default useStyles;
