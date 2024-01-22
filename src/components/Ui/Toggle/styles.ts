import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { mainColors } from "../../../theme/theme";

export const ToggleInput = styled("input")({
  width: 0,
  height: 0,
  visibility: "hidden",
});

type ToggleLabelProps = {
  isActive?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  inputColor?: string;
  hasBorder?: boolean;
};

export const ToggleLabel = styled("label")<ToggleLabelProps>(
  ({
    isActive = false,
    disabled = false,
    backgroundColor,
    inputColor,
    hasBorder = false,
  }) => css`
    display: block;
    width: 40px;
    height: 20px;
    background-color: ${mainColors.primary[40025]};
    border-radius: 100px;
    position: relative;
    cursor: pointer;
    transition: 0.3s;

    &::after {
      content: "";
      width: 14px;
      height: 14px;

      background-color: ${isActive
        ? mainColors.primary[40080]
        : mainColors.primary[40025]};
      position: absolute;
      left: ${isActive
        ? `calc(100% - ${hasBorder ? "26px" : "18px"})`
        : `${hasBorder ? "4px" : "4px"}`};
      top: 3px;
      border-radius: 70px;
      transition: 0.3s;
    }
  `
);
