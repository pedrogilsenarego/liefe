import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { businessServices } from "../../../services/business.services";
import { getObjectDifferences } from "../../../utils/compareObjects";
import { BusinessDataContext } from "../LayoutBusinessDetail";
import { formMapper } from "./mapper";
import { EditSettingsSchema, EditSettingsSchemaType } from "./validation";

const useDashboardBusinessDetailSettings = () => {
  const { businessData, refetch } = useContext(BusinessDataContext);

  const defaultValues = {
    taxControlActive: businessData?.settings?.taxControl?.active ?? false,
    taxCountry: businessData?.settings?.taxControl?.taxCountry ?? "pt",
    taxPTIVAActive:
      businessData?.settings?.taxControl?.taxDetails?.iva?.active ?? false,
    taxPTIVAPercentage:
      businessData?.settings?.taxControl?.taxDetails?.iva?.percentage ?? 0.23,
    taxPTIRSActive:
      businessData?.settings?.taxControl?.taxDetails?.irs?.active ?? false,
    taxPTIRSPercentage:
      businessData?.settings?.taxControl?.taxDetails?.irs?.percentage ?? 0.1,
  };

  const { control, handleSubmit, watch } = useForm<EditSettingsSchemaType>({
    resolver: zodResolver(EditSettingsSchema),
    defaultValues,
    mode: "onChange",
  });

  const taxControlActive = watch("taxControlActive");
  const taxCountry = watch("taxCountry");

  const { mutate: editSettingsBusiness, isLoading: isEditingSettings } =
    useMutation(businessServices.updateBusinessSettings, {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: (data: any) => {
        if (refetch) refetch();
      },
    });

  const onSubmit: SubmitHandler<EditSettingsSchemaType> = async (formData) => {
    if (!businessData?.docId || !businessData?.userId) {
      return console.log("missing businessDocId or userId");
    }
    const formChanged = getObjectDifferences(formData, defaultValues);
    if (Object.keys(formChanged).length > 0) {
      const mappedData = formMapper(formData);
      editSettingsBusiness({
        businessDocId: businessData?.docId,
        userId: businessData?.userId,
        settings: mappedData,
      });
    } else {
      console.log("No changes in the form");
    }
  };

  const isLoading = isEditingSettings;
  return {
    taxControlActive,

    taxCountry,
    isLoading,
    control,
    handleSubmit,
    onSubmit,
  };
};
export default useDashboardBusinessDetailSettings;
