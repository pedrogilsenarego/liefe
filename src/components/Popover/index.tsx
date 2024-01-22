import Popover from "@mui/material/Popover";
import * as React from "react";
import { CSS, Colors } from "../../theme/theme";

interface BasicPopoverProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: any;
}

const BasicPopover: React.FC<BasicPopoverProps> = ({
  isOpen,
  anchorEl,
  onClose,
  children,
}) => {
  const id = isOpen ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          marginTop: "40px",
          cursor: "pointer",
        }}
        PaperProps={{
          sx: {
            borderRadius: "10px",
            backgroundColor: Colors.white[40095],
          },
        }}
      >
        {children}
      </Popover>
    </div>
  );
};

export default BasicPopover;
