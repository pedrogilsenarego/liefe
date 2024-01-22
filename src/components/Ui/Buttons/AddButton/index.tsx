import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { mainColors } from "../../../../theme/theme";
import { Icons } from "../../../Icons";

interface Props extends ButtonProps {}

const AddButton = ({ ...props }: Props) => {
  return (
    <Button
      {...props}
      style={{
        padding: "5px",
        backgroundColor: mainColors.secondary[400],
        width: "60px",
        aspectRatio: 1,

        cursor: "pointer",
        borderRadius: "15%",
      }}
    >
      <Icons.AddCircle size={"40px"} color={mainColors.secondary.contrast} />
    </Button>
  );
};

export default AddButton;
