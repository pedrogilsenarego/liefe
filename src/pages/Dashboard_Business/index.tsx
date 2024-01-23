import { useState } from "react";
import Loader from "../../components/Loader";
import Button from "../../components/Ui/Buttons/Button";
import useDashboard_Business from "./useDashboard_Business";

const Dashboard_Business = () => {
  const { handleCreateNewBusiness, isLoading } = useDashboard_Business();
  const [input, setInput] = useState("");
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => handleCreateNewBusiness(input)}>
        Add New Business +
      </Button>
    </>
  );
};
export default Dashboard_Business;
