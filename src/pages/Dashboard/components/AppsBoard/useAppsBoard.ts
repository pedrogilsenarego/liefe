import { useState } from "react";
import { useSelector } from "react-redux";
import { features } from "../../../../constants/features";
import { State } from "../../../../redux/types";
import { CurrentUser } from "../../../../types/user";

const useAppsBoard = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const listFeatures = features.filter((feature) =>
    currentUser?.features.includes(feature.id)
  );

  return { openPopup, setOpenPopup, listFeatures };
};

export default useAppsBoard;
