import { Control } from "react-hook-form";
import { mapTaxSettings } from "./mapper";

interface Props {
  taxCountry: string;
  control: Control<any, any>;
}

const TaxDetails = ({ taxCountry, control }: Props) => {
  return <>{mapTaxSettings(taxCountry, control)}</>;
};
export default TaxDetails;
