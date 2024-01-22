import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { State } from "../../../../../../redux/types";
import { userServices } from "../../../../../../services/user.services";
import { CurrentUser } from "../../../../../../types/user";

const useAddFeature = () => {
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  const { mutate: signInMutation, isLoading: isAddingFeature } = useMutation(
    userServices.addFeatureToUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: (data: any) => {},
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
  return { handleAddFeature, isAddingFeature };
};

export default useAddFeature;
