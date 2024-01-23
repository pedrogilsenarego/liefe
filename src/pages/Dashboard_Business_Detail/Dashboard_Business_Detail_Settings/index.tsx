import { Box, Grid } from "@mui/material";
import ControlledCheckBox from "../../../components/Inputs/ControlledCheckBox";
import ControlledSelect from "../../../components/Inputs/ControlledSelect";
import Button from "../../../components/Ui/Buttons/Button";
import { Colors } from "../../../theme/theme";
import TaxDetails from "./components/TaxDetails";
import useDashboardBusinessDetailSettings from "./useDashboardBusinessDetailSettings";

const Dashboard_Business_Detail_Settings = () => {
  const {
    taxControlActive,
    taxCountry,
    control,
    handleSubmit,
    onSubmit,
    isLoading,
  } = useDashboardBusinessDetailSettings();
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
                label="Activate Tax Control For this business"
              />
            </Grid>
            {taxControlActive && (
              <>
                <Grid item xs={12}>
                  <ControlledSelect
                    control={control}
                    name="taxCountry"
                    options={[{ label: "Portugal", value: "pt" }]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TaxDetails taxCountry={taxCountry} control={control} />
                </Grid>
              </>
            )}
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
            isLoading={isLoading}
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
