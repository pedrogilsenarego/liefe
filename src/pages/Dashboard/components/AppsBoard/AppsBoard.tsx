import AddButton from "../../../../components/Ui/Buttons/AddButton";
import Paper from "../../../../components/Ui/Paper";

const AppsBoard = () => {
  return (
    <>
      <Paper>
        <AddButton onClick={() => console.log("clicked")} />
      </Paper>
    </>
  );
};
export default AppsBoard;
