import { useState } from "react";

const useAppsBoard = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return { openPopup, setOpenPopup };
};

export default useAppsBoard;
