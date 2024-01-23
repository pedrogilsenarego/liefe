import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BusinessDataContext } from "../LayoutBusinessDetail";
import { EditSettings } from "./types";
import { EditSettingsSchema, EditSettingsSchemaType } from "./validation";

const useDashboardBusinessDetailSettings = () => {
  const { businessData } = useContext(BusinessDataContext);

  const defaultValues = {
    taxControlActive: businessData?.taxControl?.active ?? false,
    taxCountry: businessData?.taxControl?.taxCountry ?? "pt",
    taxPTIVAActive: businessData?.taxControl?.taxDetails?.iva?.active ?? false,
    taxPTIVAPercentage:
      businessData?.taxControl?.taxDetails?.iva?.percentage ?? "0.23",
    taxPTIRSActive: businessData?.taxControl?.taxDetails?.irs?.active ?? false,
    taxPTIRSPercentage:
      businessData?.taxControl?.taxDetails?.irs?.percentage ?? "0.1",
  };

  const { reset, control, handleSubmit, watch } =
    useForm<EditSettingsSchemaType>({
      resolver: zodResolver(EditSettingsSchema),
      defaultValues,
      mode: "onChange",
    });

  const taxControlActive = watch("taxControlActive");
  const taxCountry = watch("taxCountry");

  const onSubmit: SubmitHandler<EditSettingsSchemaType> = async (
    formData: EditSettings
  ) => {
    console.log(formData);
  };
  return {
    taxControlActive,

    taxCountry,

    control,
    handleSubmit,
    onSubmit,
  };
};
export default useDashboardBusinessDetailSettings;
