import { Box, Grid, Typography } from "@mui/material";
import { Icons } from "../../../../../../components/Icons";
import ControlledFormInput from "../../../../../../components/Inputs/ControlledInput";

import Button from "../../../../../../components/Ui/Buttons/Button";
import { i18n } from "../../../../../../translations/i18n";

import Loader from "../../../../../../components/Loader";
import useStyles from "./styles";
import useRegister from "./useRegister";

type Props = {
  setMode: (mode: "login") => void;
};

const Register = ({ setMode }: Props) => {
  const classes = useStyles();
  const { handleSubmit, onSubmit, control, isRegistering } = useRegister();
  return (
    <>
      {isRegistering ? (
        <Loader
          customMessage={i18n.t(
            "pages.auth.register.loaderMessage",
            "Creating new user"
          )}
        />
      ) : (
        <Box className={classes.root} margin="0px 20px 0px 20px">
          {" "}
          <form
            className={classes.form}
            id="login-in"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box className={classes.inputBox}>
              <div
                onClick={() => setMode("login")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                }}
              >
                <Icons.LeftArrow />
                <Typography
                  style={{
                    textTransform: "uppercase",
                    textDecoration: "underline",
                  }}
                >
                  Iníciar sessão
                </Typography>
              </div>
              <Typography
                style={{
                  fontSize: "35px",
                  fontWeight: 800,
                  textAlign: "center",
                  lineHeight: "49px",
                }}
              >
                Nova Conta
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="username"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.username",
                      "Username*"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="email"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.email",
                      "E-mail"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    type="password"
                    name="password"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.password",
                      "Password"
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    type="password"
                    name="confirmPassword"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.confirmPassword",
                      "Confirm password"
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <ControlledFormInput
                    control={control}
                    name="phone"
                    inputPlaceholder={i18n.t(
                      "pages.auth.register.phone",
                      "Phone"
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
            <Button darkenColors type="submit">
              <Typography>Registar-me</Typography>
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default Register;
