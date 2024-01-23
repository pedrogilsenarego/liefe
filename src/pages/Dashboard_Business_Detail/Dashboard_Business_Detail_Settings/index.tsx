import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ControlledCheckBox from "../../../components/Inputs/ControlledCheckBox";
import Button from "../../../components/Ui/Buttons/Button";
import { Colors } from "../../../theme/theme";
import { i18n } from "../../../translations/i18n";
import { BusinessDataContext } from "../LayoutBusinessDetail";
import { EditSettings } from "./types";
import { EditSettingsSchema, EditSettingsSchemaType } from "./validation";

const Dashboard_Business_Detail_Settings = () => {
  const { businessData } = useContext(BusinessDataContext);

  const defaultValues = {
    taxControlActive: businessData?.taxControl?.active ?? false,
  };

  const { reset, control, handleSubmit } = useForm<EditSettingsSchemaType>({
    resolver: zodResolver(EditSettingsSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<EditSettingsSchemaType> = async (
    formData: EditSettings
  ) => {
    console.log(formData);
  };
  return (
    <>
      {" "}
      <form
        id="dashboard-business-detail-settings"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ControlledCheckBox
                name="taxControlActive"
                control={control}
                label="Tax Control"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "15px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            fullWidth
            darkenColors
            type="submit"
            style={{ color: Colors.blackish[400] }}
          >
            Save Settings
          </Button>
        </Box>
      </form>
    </>
  );
};
export default Dashboard_Business_Detail_Settings;
