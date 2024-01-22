import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { acceptAllCookies, setCookiePolicy } from "../../redux/general/actions";
import { State } from "../../redux/types";
import { CSS, Colors, mainColors } from "../../theme/theme";
import { i18n } from "../../translations/i18n";

import { useState } from "react";
import CookieSettingsPopup from "../CookieSettingsPopup";
import Button from "../Ui/Button";

const CookiePolicy = () => {
  const cookiePolicySignal = useSelector<State, boolean>(
    (state) => state?.general?.cookiePolicy
  );
  const dispatch = useDispatch();
  const [settingsPopup, setSettingsPopup] = useState(false);
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <>
      {cookiePolicySignal ? (
        <Box
          style={{
            position: "fixed",
            bottom: mobile ? 0 : "60px",
            maxWidth: "400px",
            borderRadius: CSS.borderRadiusS,
            zIndex: 10,
            right: mobile ? undefined : "60px",
            backgroundColor: Colors.white[40095],
            boxShadow: `2px 2px 6px ${Colors.black[40025]}`,
          }}
        >
          <Box style={{ padding: "20px" }}>
            <Typography style={{ color: mainColors.secondary[400] }}>
              {i18n.t("cookiePopup.title")}
            </Typography>
            <Typography style={{ marginTop: "10px", fontSize: "18px" }}>
              {i18n.t("cookiePopup.description")}
            </Typography>
          </Box>
          <Box
            style={{
              backgroundColor: mainColors.primary[400],
              padding: "20px",
              borderRadius: `0px 0px ${CSS.borderRadiusS} ${CSS.borderRadiusS}`,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              lightenColor
              onClick={() => {
                dispatch(setCookiePolicy(false));
                dispatch(acceptAllCookies());
              }}
            >
              <Typography style={{ color: Colors.white[400] }}>
                {i18n.t("cookiePopup.accept")}
              </Typography>
            </Button>
            <Button
              lightenColor
              onClick={() => setSettingsPopup(!settingsPopup)}
            >
              <Typography style={{ color: Colors.white[400] }}>
                {i18n.t("cookiePopup.settings")}
              </Typography>
            </Button>
          </Box>
        </Box>
      ) : null}
      <CookieSettingsPopup
        openPopup={settingsPopup}
        setOpenPopup={setSettingsPopup}
      />
    </>
  );
};

export default CookiePolicy;
