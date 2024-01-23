import { Typography } from "@mui/material";
import { Control } from "react-hook-form";
import ControlledCheckBox from "../../../../../components/Inputs/ControlledCheckBox";
import ControlledSelect from "../../../../../components/Inputs/ControlledSelect";

export const mapTaxSettings = (
  taxCountry: string,
  control: Control<any, any>
) => {
  switch (taxCountry) {
    case "pt":
      return (
        <>
          <Typography>
            In Portugal there are 3 main tax sources, IVA, IRS and SS, here you
            can define that when income is added to this business, the system
            will automatically calculate the taxes and add them to the total
            amount.
          </Typography>
          <ControlledCheckBox
            name="taxPTIVAActive"
            control={control}
            label="Activate Savings for IVA"
          />
          <ControlledSelect
            control={control}
            name="taxPTIVAPercentage"
            options={[{ label: "23%", value: 0.23 }]}
          />
          <ControlledCheckBox
            name="taxPTIRSActive"
            control={control}
            label="Activate Extra Savings for IRS"
          />
          <ControlledSelect
            control={control}
            name="taxPTIRSPercentage"
            options={[{ label: "10%", value: 0.1 }]}
          />
        </>
      );
    default:
      return null;
  }
};
