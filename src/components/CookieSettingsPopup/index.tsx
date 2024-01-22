import { Box, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptAllCookies,
  changeCookieSettings,
  declineAllCookies,
  setCookiePolicy,
} from "../../redux/general/actions";
import { CookieSettings } from "../../redux/general/types";
import { State } from "../../redux/types";
import { mainColors } from "../../theme/theme";
import { i18n } from "../../translations/i18n";
import CustomizedAccordions from "../Accordion";
import Popup from "../Popup";
import Button from "../Ui/Buttons/Button";

type Props = {
  openPopup: boolean;
  setOpenPopup: (openPopup: boolean) => void;
};

const CookieSettingsPopup = ({ openPopup, setOpenPopup }: Props) => {
  const cookieSettings = useSelector<State, CookieSettings>(
    (state) => state.general.cookieSettings
  );
  const dispatch = useDispatch();
  return (
    <Popup
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      onClose={() => setOpenPopup(false)}
    >
      <Box>
        <Typography
          style={{ fontWeight: 800, color: mainColors.secondary[400] }}
        >
          {i18n.t("cookieSettings.title")}
        </Typography>
        <Typography>
          We use cookies to help you navigate efficiently and perform certain
          functions. You will find detailed information about all cookies under
          each consent category below. The cookies that are categorized as
          "Necessary" are stored on your browser as they are essential for
          enabling the basic functionalities of the site.
        </Typography>
        <Divider style={{ marginTop: "20px", marginBottom: "20px" }} />
        <CustomizedAccordions title="Necessary">
          <Typography>
            Necessary cookies are required to enable the basic features of this
            site, such as providing secure log-in or adjusting your consent
            preferences. These cookies do not store any personally identifiable
            data.
          </Typography>
        </CustomizedAccordions>
        <CustomizedAccordions
          title="Functional"
          toggle={{
            onToggle: () =>
              dispatch(
                changeCookieSettings({
                  value: "functional",
                  signal: !cookieSettings?.functional || true,
                })
              ),
            signal: cookieSettings?.functional || true,
          }}
        >
          <Typography>
            Functional cookies help perform certain functionalities like sharing
            the content of the website on social media platforms, collecting
            feedback, and other third-party features.
          </Typography>
        </CustomizedAccordions>
        <CustomizedAccordions
          title="Analytics"
          toggle={{
            onToggle: () =>
              dispatch(
                changeCookieSettings({
                  value: "analytics",
                  signal: !cookieSettings?.analytics || true,
                })
              ),
            signal: cookieSettings?.analytics || true,
          }}
        >
          <Typography>
            Analytical cookies are used to understand how visitors interact with
            the website. These cookies help provide information on metrics such
            as the number of visitors, bounce rate, traffic source, etc.
          </Typography>
        </CustomizedAccordions>
        <CustomizedAccordions title="Performance">
          <Typography>
            Performance cookies are used to understand and analyze the key
            performance indexes of the website which helps in delivering a
            better user experience for the visitors.
          </Typography>
        </CustomizedAccordions>
        <CustomizedAccordions
          title="Advertisement"
          toggle={{
            onToggle: () =>
              dispatch(
                changeCookieSettings({
                  value: "advertisement",
                  signal: !cookieSettings?.advertisement || true,
                })
              ),
            signal: cookieSettings?.advertisement || true,
          }}
        >
          <Typography>
            Advertisement cookies are used to provide visitors with customized
            advertisements based on the pages you visited previously and to
            analyze the effectiveness of the ad campaigns.
          </Typography>
        </CustomizedAccordions>
        <CustomizedAccordions
          title="Uncategorized"
          toggle={{
            onToggle: () =>
              dispatch(
                changeCookieSettings({
                  value: "uncategorized",
                  signal: !cookieSettings?.uncategorized || true,
                })
              ),
            signal: cookieSettings?.uncategorized || true,
          }}
        >
          <Typography>
            Other uncategorized cookies are those that are being analyzed and
            have not been classified into a category as yet.
          </Typography>
        </CustomizedAccordions>
        <Divider />
        <Box
          style={{
            width: "100%",
            display: "flex",
            margin: "20px 0px",
            justifyContent: "space-between",
            columnGap: "10px",
            paddingBottom: "20px",
          }}
        >
          <Button
            fullWidth
            darkenColors
            onClick={() => {
              setOpenPopup(false);
              dispatch(acceptAllCookies());
              dispatch(setCookiePolicy(false));
            }}
          >
            Accept All
          </Button>
          <Button
            fullWidth
            darkenColors
            onClick={() => {
              setOpenPopup(false);
              dispatch(declineAllCookies());
              dispatch(setCookiePolicy(false));
            }}
          >
            Reject All
          </Button>
        </Box>
      </Box>
    </Popup>
  );
};

export default CookieSettingsPopup;
