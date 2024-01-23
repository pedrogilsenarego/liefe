import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BusinessDataContext } from "../LayoutBusinessDetail";
import { EditSettings } from "./types";
import { EditSettingsSchema, EditSettingsSchemaType } from "./validation";

const useDashboardBusinessDetailSettings = () => {
  const { businessData } = useContext(BusinessDataContext);

  const defaultValues = {
    taxControlActive: businessData?.taxControl?.active ?? false,
    taxCountry: businessData?.taxControl?.taxCountry ?? "pt",
  };
  const [taxControlActive, setTaxControlActive] = useState(
    businessData?.taxControl?.active ?? false
  );

  const { reset, control, handleSubmit } = useForm<EditSettingsSchemaType>({
    resolver: zodResolver(EditSettingsSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<EditSettingsSchemaType> = async (
    formData: EditSettings
  ) => {
    console.log(formData);
  };
  return {
    taxControlActive,
    setTaxControlActive,
    control,
    handleSubmit,
    onSubmit,
  };
};
export default useDashboardBusinessDetailSettings;
