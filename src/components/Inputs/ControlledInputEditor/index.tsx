/* eslint-disable react/no-unused-prop-types */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Box,
  FormControl,
  FormControlProps,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import { FC } from "react";
import { Control, UseFormSetValue, get, useController } from "react-hook-form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Colors, mainColors } from "../../../theme/theme";
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
          marginTop: "1.8rem",
        }}
      >
        {label && (
          <InputLabel
            htmlFor={name}
            style={{ transform: "translate(0, -0rem)" }}
          >
            {label}
          </InputLabel>
        )}
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

const ControlledFormInputEditor: FC<BaseProps> = (props) => {
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
      <Box>
        <CKEditor
          editor={ClassicEditor}
          data={field.value}
          onChange={(event, editor) => field.onChange(editor.getData())}
        />
      </Box>
    </FormControlComp>
  );
};

export default ControlledFormInputEditor;
