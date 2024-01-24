import { Button, ButtonProps } from "@mui/material";
import { CSSProperties } from "@mui/styles";
import React from "react";
import { mainColors } from "../../../../theme/theme";
import { Icons } from "../../../Icons";

interface Props extends ButtonProps {
  icon?: React.ReactNode;
  iconStyle?: CSSProperties;
}

const AddButton = ({ icon, iconStyle, ...props }: Props) => {
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
        <Icons.AddCircle
          size={"30px"}
          color={mainColors.secondary.contrast}
          style={{ ...iconStyle }}
        />
      )}
    </Button>
  );
};

export default AddButton;
