import Checkbox from "@mui/material/Checkbox";
import { Control, useController } from "react-hook-form";

interface Props {
  label?: string;
  color?: string;
  control?: Control<any, any>;
  name: string;
  disabled?: boolean;
}

const ControlledCheckBox = ({
  label,
  color,
  name,
  control,
  disabled = false,
}: Props) => {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  const handleLabelClick = () => {
    if (!disabled) onChange(!value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginLeft: "-10px",
        }}
      >
        <Checkbox
          disabled={disabled}
          checked={value}
          onChange={() => onChange(!value)}
          inputRef={ref}
          sx={{
            color: disabled ? "lightGrey" : color || "auto",
            "&.Mui-checked": {
              color: disabled ? "lightGrey" : color || "auto",
            },
          }}
        />
        <div onClick={handleLabelClick} style={{ cursor: "pointer" }}>
          {label}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      ></div>
    </div>
  );
};

export default ControlledCheckBox;
