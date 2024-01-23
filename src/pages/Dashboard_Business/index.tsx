import { useState } from "react";
import Loader from "../../components/Loader";
import Button from "../../components/Ui/Buttons/Button";
import useDashboard_Business from "./useDashboard_Business";

const Dashboard_Business = () => {
  const { handleCreateNewBusiness, isLoading, currentUser } =
    useDashboard_Business();
  const [input, setInput] = useState("");
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => handleCreateNewBusiness(input)}>
        Add New Business +
      </Button>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        {currentUser?.business?.map((business) => {
          return (
            <div
              style={{
                padding: "20px",
                backgroundColor: "lightGrey",
                borderRadius: "10px",
              }}
              key={business.businessDocId}
            >
              {business.businessName}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Dashboard_Business;
