import { Box, Grid, Typography } from "@mui/material";
import ControlledFormInput from "../../../../../../components/Inputs/ControlledInput";
import Loader from "../../../../../../components/Loader";
import Button from "../../../../../../components/Ui/Buttons/Button";
import { Colors, mainColors } from "../../../../../../theme/theme";
import { i18n } from "../../../../../../translations/i18n";
import useStyles from "./styles";
import useLogin from "./useRecoverPassword";

const RecoverPassword = () => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control, isLogin } = useLogin();
  return (
    <>
      {isLogin ? (
        <Loader
          customMessage={i18n.t(
            "pages.auth.recoverPassword.loaderMessage",
            "Logging in"
          )}
        />
      ) : (
        <Box className={classes.root} margin="0px 20px 0px 20px">
          <Box>
            <Typography
              style={{
                fontSize: "35px",
                fontWeight: 800,
                textAlign: "center",
                lineHeight: "49px",
              }}
            >
              {i18n.t("pages.auth.recoverPassword.welcome")}
            </Typography>
            <Typography
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "20px",
                color: mainColors.secondary[400],
              }}
            >
              {i18n.t("pages.auth.recoverPassword.subWelcome")}
            </Typography>
          </Box>
          <form
            className={classes.form}
            id="recover-pwd"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box className={classes.inputBox}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="email"
                    inputPlaceholder={i18n.t("pages.auth.login.email", "Email")}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "15px",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                fullWidth
                darkenColors
                type="submit"
                style={{ color: Colors.blackish[400] }}
              >
                {i18n.t("pages.auth.recoverPassword.submit")}
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </>
  );
};

export default RecoverPassword;
