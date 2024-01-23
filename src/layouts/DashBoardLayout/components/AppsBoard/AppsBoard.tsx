import Popup from "../../../../components/Popup";
import AddButton from "../../../../components/Ui/Buttons/AddButton";
import Paper from "../../../../components/Ui/Paper";
import AddFeature from "./components/AddFeature";
import useAppsBoard from "./useAppsBoard";

const AppsBoard = () => {
  const { openPopup, setOpenPopup, listFeatures, handleClickFeature } =
    useAppsBoard();
  return (
    <>
      <Paper>
        <div style={{ display: "flex", columnGap: "20px" }}>
          {listFeatures.map((feature) => {
            return (
              <AddButton
                onClick={() => handleClickFeature(feature.route)}
                style={{ backgroundColor: feature.color }}
                key={feature.id}
                icon={feature.icon}
              />
            );
          })}
          <AddButton onClick={() => setOpenPopup(true)} />
        </div>
      </Paper>
      <Popup openPopup={openPopup} onClose={() => setOpenPopup(false)}>
        <AddFeature setOpenPopup={setOpenPopup} />
      </Popup>
    </>
  );
};
export default AppsBoard;
