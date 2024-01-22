import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { features } from "../../../../../../constants/features";
import { State } from "../../../../../../redux/types";
import { setUser } from "../../../../../../redux/user/actions";
import { userServices } from "../../../../../../services/user.services";
import { CurrentUser } from "../../../../../../types/user";

interface Props {
  setOpenPopup: (value: boolean) => void;
}

const useAddFeature = ({ setOpenPopup }: Props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  const listFeatures = features.filter(
    (feature) => !currentUser?.features.includes(feature.id)
  );

  const { mutate: signInMutation, isLoading: isAddingFeature } = useMutation(
    userServices.addFeatureToUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: (data: any) => {
        dispatch(setUser(data as CurrentUser));
        setOpenPopup(false);
      },
    }
  );
  const handleAddFeature = (feature: string) => {
    if (!currentUser?.docId) return console.log("no user");
    const payload = {
      userId: currentUser?.docId,
      newFeature: feature,
    };
    signInMutation(payload);
  };
  return { handleAddFeature, isAddingFeature, listFeatures };
};

export default useAddFeature;
