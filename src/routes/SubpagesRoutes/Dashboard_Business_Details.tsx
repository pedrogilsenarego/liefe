import WithAuth from "../../hoc/withAuth";
import DashboardLayout from "../../layouts/DashBoardLayout";
import LayoutBusinessDetail from "../../pages/Dashboard_Business_Detail/LayoutBusinessDetail";

import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

const wrapWithLayoutAndAccess = (Component: React.ComponentType) => {
  return (
    <WithAuth>
      <DashboardLayout>
        <LayoutBusinessDetail>
          <Component />
        </LayoutBusinessDetail>
      </DashboardLayout>
    </WithAuth>
  );
};

export const dashboardBusinessDetailsRoutes = [
  {
    path: ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS,
    component: wrapWithLayoutAndAccess(RoutesI.DashboardBusinessDetails),
  },
  {
    path: ROUTE_PATHS.DASHBOARD_BUSINESS_DETAILS_SETTINGS,
    component: wrapWithLayoutAndAccess(
      RoutesI.DashboardBusinessDetailsSettings
    ),
  },
];
