import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { CSS, Colors, mainColors } from "../../../theme/theme";
import { Icons } from "../../Icons";

export interface Props {
  initialValue?: string;
  onChange: (value: string) => void;
  label?: string;
  options: { value: string; label: string }[];
}

const UncontrolledSelect = ({ initialValue, onChange, options }: Props) => {
  const [value, setValue] = useState(initialValue || undefined);
  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Select
      IconComponent={() => null}
      variant="outlined"
      sx={{
        color: Colors.blackish[400],

        "& .MuiSvgIcon-root": {
          color: mainColors.primary[400],
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "& .MuiSelect-outlined": {},
      }}
      value={value}
      onChange={handleChange}
      MenuProps={{
        PaperProps: {
          sx: {
            borderRadius: CSS.borderRadiusS,
            backgroundColor: Colors.white[40095],
            "& .MuiMenuItem-root": {
              color: mainColors.primary[400],
            },
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default UncontrolledSelect;
