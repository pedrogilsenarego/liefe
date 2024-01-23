import WithAuth from "../../hoc/withAuth";
import DashboardLayout from "../../layouts/DashBoardLayout";
import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

const wrapWithLayoutAndAccess = (Component: React.ComponentType) => {
  return (
    <WithAuth>
      <DashboardLayout>
        <Component />
      </DashboardLayout>
    </WithAuth>
  );
};

export const dashboardRoutes = [
  {
    path: ROUTE_PATHS.DASHBOARD,
    component: wrapWithLayoutAndAccess(RoutesI.Dashboard),
  },
  {
    path: ROUTE_PATHS.DASHBOARD_BUSINESS,
    component: wrapWithLayoutAndAccess(RoutesI.DashboardBusiness),
  },
];
