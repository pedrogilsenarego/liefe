import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import Button from "../../components/Ui/Buttons/Button";
import { ROUTE_PATHS } from "../../routes/constants";
import useDashboard_Business from "./useDashboard_Business";

const Dashboard_Business = () => {
  const navigate = useNavigate();
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
      <div style={{ display: "flex", columnGap: "20px" }}>
        {currentUser?.business?.map((business) => {
          return (
            <div
              onClick={() =>
                navigate(
                  ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS.replace(
                    ":businessId",
                    business?.businessDocId
                  )
                )
              }
              style={{
                cursor: "pointer",
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
