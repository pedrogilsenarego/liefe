import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { Colors } from "../../theme/theme";
import Button from "./ButtonPopup";
import { Actions } from "./types";

interface Props {
  children: JSX.Element;
  title?: string;
  openPopup: boolean;
  setOpenPopup?: (openPopup: boolean) => void;

  actions?: Actions[];
  onClose?: () => void;
}

const Popup = ({
  title,
  children,
  openPopup,
  setOpenPopup,
  actions,
  onClose,
}: Props) => {
  return (
    <Dialog
      PaperProps={{
        style: {
          borderRadius: "0px",
          maxHeight: "65%",
        },
      }}
      hideBackdrop
      open={openPopup}
      onClose={onClose}
    >
      {title && (
        <DialogTitle>
          <div style={{ textAlign: "center" }}>
            <Typography
              component="div"
              style={{
                fontSize: "28px",
                color: Colors.blackish[400],
                fontWeight: 700,
                letterSpacing: "3px",
              }}
            >
              {title}
            </Typography>
          </div>
        </DialogTitle>
      )}
      <DialogContent
        dividers
        style={{
          color: "white",
          display: "flex",
        }}
      >
        {children}
        {actions && (
          <>
            <Divider
              style={{
                width: "100%",
                background: "#ffffff66",
                marginTop: "10px",
              }}
            />
            <Grid
              container
              justifyContent="flex-end"
              style={{ marginTop: "10px" }}
            >
              {actions?.map((item, pos) => {
                return (
                  <Button
                    disabled={item.disabled}
                    title={item.title}
                    key={pos}
                    onClick={item.onClick}
                  />
                );
              })}
            </Grid>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default Popup;
