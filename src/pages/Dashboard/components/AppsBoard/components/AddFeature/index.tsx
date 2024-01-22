import Loader from "../../../../../../components/Loader";
import AddButton from "../../../../../../components/Ui/Buttons/AddButton";
import { Feature } from "../../../../../../constants/types";
import useAddFeature from "./useAddFeature";

interface Props {
  setOpenPopup: (value: boolean) => void;
}

const AddFeature = ({ setOpenPopup }: Props) => {
  const { handleAddFeature, isAddingFeature, listFeatures } = useAddFeature({
    setOpenPopup,
  });
  return isAddingFeature ? (
    <Loader />
  ) : (
    <>
      {listFeatures.map((feature: Feature) => {
        return (
          <AddButton
            key={feature.name}
            onClick={() => handleAddFeature(feature.id)}
            style={{ backgroundColor: feature.color }}
            icon={feature.icon}
          />
        );
      })}
    </>
  );
};
export default AddFeature;
