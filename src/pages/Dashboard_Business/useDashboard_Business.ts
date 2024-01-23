import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/types";
import { setUser } from "../../redux/user/actions";
import { businessServices } from "../../services/business.services";
import { CurrentUser } from "../../types/user";

const useDashboard_Business = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  const { mutate: signInMutation, isLoading: iscreatingBusiness } = useMutation(
    businessServices.addNewBusiness,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: (data: any) => {
        dispatch(setUser(data as CurrentUser));
      },
    }
  );
  const isLoading = iscreatingBusiness;
  const handleCreateNewBusiness = (businessName: string) => {
    if (!currentUser?.docId) return console.log("no user");
    const payload = {
      userId: currentUser?.docId,
      businessName,
    };
    signInMutation(payload);
  };
  return { handleCreateNewBusiness, isLoading };
};

export default useDashboard_Business;
