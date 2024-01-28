import { useQuery } from "@tanstack/react-query";

import { Typography } from "@mui/material";

import { createContext } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import Paper from "../../../components/Ui/Paper";
import { State } from "../../../redux/types";
import { ROUTE_PATHS } from "../../../routes/constants";
import { businessServices } from "../../../services/business.services";
import { queryIdentifiers } from "../../../services/constants";
import { Colors, mainColors } from "../../../theme/theme";
import { BusinessData } from "../../../types/business";
import { CurrentUser } from "../../../types/user";

export const BusinessDataContext = createContext<{
  businessData: BusinessData | null | undefined;
  refetch?: () => void;
}>({
  businessData: null,
  refetch: () => {},
});

interface Props {
  children: React.ReactNode;
}

const LayoutBusinessDetail = ({ children }: Props) => {
  const { businessId } = useParams();
  const navigate = useNavigate();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const queryKey = [queryIdentifiers.BUSINESS_DETAIL, businessId];
  const businessDocId = businessId || "";
  const userId = currentUser?.docId || "";
  const location = useLocation();

  const {
    data: businessData,
    isLoading,
    isError,
    error: businessError,
    refetch,
  } = useQuery(
    queryKey,
    () => businessServices.getBusiness({ businessDocId, userId }),
    {
      refetchOnWindowFocus: false,
      enabled: !!businessDocId || !!userId,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError && businessError) {
    return <div>{JSON.stringify(businessError)}</div>;
  }

  if (!businessId || !currentUser?.docId) {
    // Return a message or component indicating that businessDocId or userID is null
    return <div>Business ID or User ID is missing</div>;
  }

  return (
    <BusinessDataContext.Provider value={{ businessData, refetch }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            columnGap: "20px",

            paddingLeft: "20px",
          }}
        >
          <Typography
            style={{
              cursor: "pointer",
              color:
                location.pathname ===
                ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS.replace(
                  ":businessId",
                  businessId
                )
                  ? mainColors.secondary.contrast
                  : Colors.white[40050],
              padding: "10px 10px",
              borderBottom:
                location.pathname ===
                ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS.replace(
                  ":businessId",
                  businessId
                )
                  ? `1px solid ${mainColors.secondary.contrast}`
                  : "none",
            }}
            onClick={() =>
              navigate(
                ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS.replace(
                  ":businessId",
                  businessId
                )
              )
            }
          >
            {businessData?.businessName}
          </Typography>
          <Typography
            style={{
              cursor: "pointer",
              color:
                location.pathname ===
                ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS_SETTINGS.replace(
                  ":businessId",
                  businessId
                )
                  ? mainColors.secondary.contrast
                  : Colors.white[40050],
              padding: "10px 10px",
              borderBottom:
                location.pathname ===
                ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS_SETTINGS.replace(
                  ":businessId",
                  businessId
                )
                  ? `1px solid ${mainColors.secondary.contrast}`
                  : "none",
            }}
            onClick={() =>
              navigate(
                ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS_SETTINGS.replace(
                  ":businessId",
                  businessId
                )
              )
            }
          >
            Definitions
          </Typography>
        </div>

        {children}
      </div>
    </BusinessDataContext.Provider>
  );
};

export default LayoutBusinessDetail;
