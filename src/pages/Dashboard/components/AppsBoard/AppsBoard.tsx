import Popup from "../../../../components/Popup";
import AddButton from "../../../../components/Ui/Buttons/AddButton";
import Paper from "../../../../components/Ui/Paper";
import AddFeature from "./components/AddFeature";
import useAppsBoard from "./useAppsBoard";

const AppsBoard = () => {
  const { openPopup, setOpenPopup } = useAppsBoard();
  return (
    <>
      <Paper>
        <AddButton onClick={() => setOpenPopup(true)} />
      </Paper>
      <Popup openPopup={openPopup} onClose={() => setOpenPopup(false)}>
        <AddFeature />
      </Popup>
    </>
  );
};
export default AppsBoard;
