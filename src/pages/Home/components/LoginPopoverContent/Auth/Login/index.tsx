import { Box, Divider, Grid, Typography } from "@mui/material";
import ControlledFormInput from "../../../../../../components/Inputs/ControlledInput";

import Button from "../../../../../../components/Ui/Buttons/Button";

import Loader from "../../../../../../components/Loader";
import { Colors } from "../../../../../../theme/theme";
import { i18n } from "../../../../../../translations/i18n";
import useStyles from "./styles";
import useLogin from "./useLogin";

type Props = {
  setMode: (mode: "register") => void;
};

const Login = ({ setMode }: Props) => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control, isLogin, navigate } = useLogin();
  return (
    <>
      {isLogin ? (
        <Loader
          customMessage={i18n.t("pages.auth.login.loaderMessage", "Logging in")}
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
              Área de cliente
            </Typography>
          </Box>
          <form
            className={classes.form}
            id="login-in"
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
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    type="password"
                    name="password"
                    inputPlaceholder={i18n.t(
                      "pages.auth.login.password",
                      "Password"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.register}>
                    Recuperar password
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              style={{
                marginTop: "60px",
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
                Iniciar sessão
              </Button>
            </Box>
          </form>
          <Divider style={{ width: "100%", height: "1px" }} />
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >
            <Typography
              style={{
                color: Colors.blackish[400],
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              Ainda não é cliente ehtiq?
            </Typography>
            <Button
              onClick={() => setMode("register")}
              fullWidth
              darkenColors
              style={{ color: Colors.blackish[400] }}
            >
              Criar conta
            </Button>
          </div>
        </Box>
      )}
    </>
  );
};

export default Login;
