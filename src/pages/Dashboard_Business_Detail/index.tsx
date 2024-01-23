import { useQuery } from "@tanstack/react-query";

import { error } from "console";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { State } from "../../redux/types";
import { businessServices } from "../../services/business.services";
import { queryIdentifiers } from "../../services/constants";
import { CurrentUser } from "../../types/user";

const Dashboard_Business_Detail = () => {
  const { businessId } = useParams();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const queryKey = [queryIdentifiers.BUSINESS_DETAIL, businessId];
  const businessDocId = businessId || "";
  const userId = currentUser?.docId || "";
  // Use useQuery hook to fetch business details
  const {
    data: businessData,
    isLoading,
    isError,
    error: businessError,
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

  console.log(currentUser, businessId);
  if (!businessId || !currentUser?.docId) {
    // Return a message or component indicating that businessDocId or userID is null
    return <div>Business ID or User ID is missing</div>;
  }

  return (
    <div>
      <div>{businessData?.businessName}</div>
    </div>
  );
};

export default Dashboard_Business_Detail;
