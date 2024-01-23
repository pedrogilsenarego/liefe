import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { features } from "../../../../constants/features";
import { State } from "../../../../redux/types";
import { CurrentUser } from "../../../../types/user";

const useAppsBoard = () => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const listFeatures =
    features.filter((feature) => currentUser?.features?.includes(feature.id)) ||
    [];

  const handleClickFeature = (feature: string) => {
    navigate(feature);
  };

  return { openPopup, setOpenPopup, listFeatures, handleClickFeature };
};

export default useAppsBoard;
