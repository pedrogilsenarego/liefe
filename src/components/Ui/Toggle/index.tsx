import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";
import * as Styled from "./styles";

export type ToggleProps = {
  isActive: boolean;
  onClick?: () => void;
  label?: string;
  disabled?: boolean;
  confirmationRequired?: boolean;
  confirmationButtonLabel?: string;
  declineButtonLabel?: string;
  confirmationTitle?: string;
  confirmationDescription?: string;
  backgroundColor?: string;
  inputColor?: string;
  hasBorder?: boolean;
};

const Toggle = ({
  label,
  isActive = false,
  onClick,
  disabled = false,
  confirmationRequired = false,
  confirmationButtonLabel = "Accept",
  declineButtonLabel = "Decline",
  confirmationTitle,
  confirmationDescription,
  backgroundColor,
  inputColor,
  hasBorder,
}: ToggleProps) => {
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleCloseConfirmation = () => {
    setOpenConfirmation(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    if (confirmationRequired) {
      if (openConfirmation) {
        handleCloseConfirmation();
        if (onClick) onClick();
      } else {
        setOpenConfirmation(true);
      }
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <Box display="flex" alignItems="center">
        {label && <Typography>{label}</Typography>}
        <Box display="flex" ml={label ? 2 : 0}>
          <Styled.ToggleInput
            id="switch"
            type="checkbox"
            name="switch"
            style={{ margin: 0 }}
          />
          <Styled.ToggleLabel
            backgroundColor={backgroundColor}
            inputColor={inputColor}
            isActive={isActive}
            style={{ margin: 0 }}
            htmlFor="switch"
            onClick={(e: any) => {
              e.preventDefault();
              handleClick(e);
            }}
            disabled={disabled}
            hasBorder={hasBorder}
          />
        </Box>
      </Box>
      {confirmationRequired && (
        <Dialog
          data-testid="dialog"
          open={openConfirmation}
          onClose={handleCloseConfirmation}
          PaperProps={{ sx: { bgcolor: "white" } }}
        >
          <DialogTitle>{confirmationTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>{confirmationDescription}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseConfirmation}>
              {declineButtonLabel}
            </Button>
            <Button onClick={handleClick}>{confirmationButtonLabel}</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default Toggle;
