import { BusinessSettings } from "../../../types/business";
import { EditSettingsSchemaType } from "./validation";

export const formMapper = (data: EditSettingsSchemaType): BusinessSettings => {
  return {
    taxControl: {
      active: data.taxControlActive,
      taxCountry: data.taxCountry,
      taxDetails: {
        iva: {
          active: data.taxPTIVAActive,
          percentage: data.taxPTIVAPercentage,
        },
        irs: {
          active: data.taxPTIRSActive,
          percentage: data.taxPTIRSPercentage,
        },
      },
    },
  };
};

export default formMapper;
