import { ButtonProps, Button as MuiButton } from "@mui/material";
import React, { useState } from "react";
import Loader from "../../../Loader";
import { buttonStyle } from "./styles";

interface Props extends ButtonProps {
  darkenColors?: boolean;
  lightenColor?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <MuiButton
      disabled={props.isLoading}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref}
      {...props}
      sx={buttonStyle({
        hover,
        darkenColors: props.darkenColors,
        lightenColor: props.lightenColor,
      })}
    >
      {props.isLoading ? <Loader size={30} /> : props.children}
    </MuiButton>
  );
});

export default Button;
