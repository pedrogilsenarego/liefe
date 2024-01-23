import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { mainColors } from "../../../../theme/theme";
import { Icons } from "../../../Icons";

interface Props extends ButtonProps {
  icon?: React.ReactNode;
}

const AddButton = ({ icon, ...props }: Props) => {
  // Extract only the properties needed for your styles
  const { style, ...restProps } = props;

  return (
    <Button
      style={{
        backgroundColor: mainColors.secondary[400],

        aspectRatio: 1,
        cursor: "pointer",
        borderRadius: "15%",
        // Apply additional styles from props.style
        ...style,
      }}
      {...restProps}
    >
      {icon ? (
        icon
      ) : (
        <Icons.AddCircle size={"30px"} color={mainColors.secondary.contrast} />
      )}
    </Button>
  );
};

export default AddButton;
