import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Colors } from "../../theme/theme";
import "./index.css";

interface Props {
  minimumOne?: boolean;
  initialValue?: number;
  updateValue?: (value: number) => void;
}

const Incrementor = ({ minimumOne, initialValue, updateValue }: Props) => {
  const [value, setValue] = useState<number>(initialValue || 0);

  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleValue = (signal: "minus" | "plus") => {
    let newValue = value;
    if (signal === "minus" && newValue > (minimumOne ? 1 : 0)) {
      newValue -= 1;
    } else if (signal === "plus") {
      newValue += 1;
    }
    setValue(newValue);

    if (updateValue) {
      updateValue(newValue);
    }
  };

  // Use the initialValue prop as the initial value for the state
  // value of the incrementor
  useEffect(() => {
    setValue(initialValue || 0);
  }, [initialValue]);

  return (
    <Box display="flex" columnGap={1}>
      <Box
        style={{
          cursor: value === (minimumOne ? 1 : 0) ? "default" : "pointer",
          border:
            value === (minimumOne ? 1 : 0)
              ? "solid 2px lightGrey"
              : `solid 2px ${Colors.blackish[400]}`,

          width: mobile ? "30px" : "35px",
          height: mobile ? "30px" : "35px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2px",
        }}
        className="box"
        onClick={(e) => {
          e.preventDefault();
          handleValue("minus");
        }}
      >
        <Typography fontSize={mobile ? "0.6rem" : "1rem"}>-</Typography>
      </Box>
      <Box
        style={{
          width: mobile ? "30px" : "35px",
          height: mobile ? "30px" : "35px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Typography fontSize={mobile ? "0.6rem" : "1rem"}>{value}</Typography>
      </Box>
      <Box
        style={{
          cursor: "pointer",
          width: mobile ? "30px" : "35px",
          height: mobile ? "30px" : "35px",
          border: `solid 2px ${Colors.blackish[400]}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2px",
        }}
        onClick={(e) => {
          e.preventDefault();
          handleValue("plus");
        }}
      >
        <Typography fontSize={mobile ? "0.6rem" : "1rem"}>+</Typography>
      </Box>
    </Box>
  );
};

export default Incrementor;
