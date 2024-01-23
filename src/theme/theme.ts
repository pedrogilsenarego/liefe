import { createTheme } from "@mui/material/styles";

export const CSS = {
  borderRadiusS: "0px",
  borderRadius: "0px",
  container: "xl",
};

export const Colors = {
  redish: {
    200: "#ff5959",
    400: "#FF0000",
    40050: "#FF0000A6",
  },
  white: {
    400: "white",
    40010: "#ffffff1A",
    40050: "#ffffff80",
    40075: "#ffffffBF",
    40095: "#ffffffF2",
    40098: "#ffffffFA",
  },
  grey: {
    200: "#898c90",
    400: "#494F55",
    40050: "#494F55A6",
  },
  tealc: {
    100: "#28e7bf66",
    200: "#19eebe",
    400: "#0fd28e",
  },
  purple: {
    200: "#8701c8",
    400: "#6201cc",
  },
  orange: {
    100: "#feae6f",
    200: "#FE663D",
    400: "#FE4622",
  },
  pacificBlue: {
    200: "#ffffff44",
    300: "#00c5cb",
    400: "#01a5c8",
  },
  black: {
    400: "#000000",
    40001: "#00000003",
    40005: "#0000000D",
    40010: "#0000001A",
    40025: "#00000040",
    40050: "#00000080",
  },
  blackish: {
    400: "#1A2032",
    40005: "#1A20320D",
    40025: "#1A203240",
    40080: "#1A2032CC",
  },
};

export const mainColors = {
  primary: {
    400: Colors.blackish[400],
    40005: Colors.blackish[40005],
    40025: Colors.blackish[40025],
    40080: Colors.blackish[40080],
  },
  secondary: {
    400: Colors.redish[400],
    40050: Colors.redish[40050],
    contrast: Colors.white[400],
  },
};

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Urbanist', sans-serif",
      fontWeight: 400,
      textTransform: "none",
      fontSize: 16,
      color: Colors.blackish[400],
      caretColor: "transparent",
    },
  },
  palette: {
    primary: {
      main: "#fffff",
    },
    secondary: {
      main: "#fffff",
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            //backgroundColor: "red",
          },
          "&:active": {
            //backgroundColor: "red",
          },
          "&:focus": {
            //backgroundColor: "red",
          },
        },
      },
    },
  },
});

export default theme;
