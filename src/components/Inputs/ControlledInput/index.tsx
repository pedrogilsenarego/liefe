/* eslint-disable react/no-unused-prop-types */
import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputAdornment,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import { FC } from "react";
import { Control, UseFormSetValue, get, useController } from "react-hook-form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { mainColors } from "../../../theme/theme";
import { Icons } from "../../Icons";
import useStyles from "./styles";
import useControlledInput from "./useControlledInput";

export interface BaseReactHookFormProps {
  name: string;
  control?: Control<any, any>;
  setValue?: UseFormSetValue<any>;
  label?: string;
  tooltipLabel?: string;
  inputPlaceholder: string;
  type?: string;
}
export interface BaseProps extends FormControlProps, BaseReactHookFormProps {}

const FormControlComp = (props: BaseProps) => {
  const { children, name, control, label, tooltipLabel } = props;
  const {
    formState: { errors },
  } = useController({ name, control });
  const error = get(errors, name, "");

  return (
    <FormControl error={!!errors[name]} fullWidth>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        {tooltipLabel && (
          <Tooltip placement="left" color="primary.100" title={tooltipLabel}>
            <Box height="0.9rem" width="0.9rem">
              <AiOutlineInfoCircle />
            </Box>
          </Tooltip>
        )}
      </Box>
      {children}
      <FormHelperText color="error">{error.message}</FormHelperText>
    </FormControl>
  );
};

const ControlledFormInput: FC<BaseProps> = (props) => {
  const {
    name,
    control,
    label,
    inputPlaceholder,
    type,

    setValue,
    ...rest
  } = props;
  const {
    hasError,
    field,

    isSubmitting,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useControlledInput({
    name,
    control,
    setValue,
  });

  const classes = useStyles();
  return (
    <FormControlComp
      name={name}
      control={control}
      label={label}
      {...rest}
      inputPlaceholder={inputPlaceholder}
    >
      <TextField
        variant="standard"
        className={classes.root}
        type={
          type === "password"
            ? !showPassword
              ? "password"
              : "text"
            : undefined
        }
        style={{ marginBottom: hasError ? "0.2rem" : "0" }}
        {...field}
        id={name}
        disabled={isSubmitting}
        placeholder={inputPlaceholder}
        InputProps={
          type === "password"
            ? {
                sx: { fontSize: "20px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <Icons.EyeInvisible
                          size={"20px"}
                          style={{ cursor: "pointer", marginTop: "2px" }}
                          color={mainColors.primary[400]}
                        />
                      ) : (
                        <Icons.EyeVisible
                          size={"20px"}
                          style={{ cursor: "pointer", marginTop: "2px" }}
                          color={mainColors.primary[400]}
                        />
                      )}
                    </Box>
                  </InputAdornment>
                ),
              }
            : { sx: { fontSize: "20px" } }
        }
      />
    </FormControlComp>
  );
};

export default ControlledFormInput;
