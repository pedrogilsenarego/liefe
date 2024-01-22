import Loader from "../../../../../../components/Loader";
import AddButton from "../../../../../../components/Ui/Buttons/AddButton";
import { features } from "../../../../../../constants/features";
import { Feature } from "../../../../../../constants/types";
import { Colors } from "../../../../../../theme/theme";
import useAddFeature from "./useAddFeature";

const AddFeature = () => {
  const { handleAddFeature, isAddingFeature } = useAddFeature();
  return isAddingFeature ? (
    <Loader />
  ) : (
    <>
      {features.map((feature: Feature) => {
        return (
          <AddButton
            key={feature.name}
            onClick={() => handleAddFeature(feature.id)}
            style={{ backgroundColor: Colors.tealc[400] }}
            icon={feature.icon}
          />
        );
      })}
    </>
  );
};
export default AddFeature;
