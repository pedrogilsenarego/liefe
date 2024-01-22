import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useState } from "react";
import { Colors, mainColors } from "../../theme/theme";
import "./index.css";

type Anchor = "top" | "left" | "bottom" | "right";
type Props = {
  position: Anchor;
  openDrawer: boolean;
  setOpenDrawer: (openDrawer: boolean) => void;
  children: any;
  fullWidth?: boolean;
  fullHeight?: boolean;
  noPadding?: boolean;
  clearBackground?: boolean;
  topRadius?: boolean;
  width?: string;
  minWidth?: string;
  paddingLeft?: string;
};

const DrawerMine = ({
  position = "right",
  openDrawer,
  setOpenDrawer,
  noPadding,
  fullWidth,
  fullHeight,
  children,
  clearBackground,
  topRadius,
  minWidth,
  width,
  paddingLeft,
}: Props) => {
  const list = () => (
    <Box
      className="drawer"
      component="div"
      sx={{
        minWidth: fullWidth ? "100vw" : minWidth ?? "30vw",
        minHeight: fullHeight ? "100vh" : "auto",
        height: "auto",
        overflowY: "auto",
        backgroundColor: Colors.white[400],
      }}
      role="presentation"
    >
      {children}
    </Box>
  );

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      if (isLeftSwipe) {
        handleClose();
      }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div onWheel={handleWheel}>
      <Drawer
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        BackdropProps={{
          style: {
            backgroundColor: clearBackground ? "transparent" : "#00000066",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
          },
        }}
        anchor={position}
        open={openDrawer}
        onClose={handleClose}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default DrawerMine;
