import WithAuth from "../../hoc/withAuth";
import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

export const dashboardRoutes = [
  {
    path: ROUTE_PATHS.DASHOARD,
    component: (
      <WithAuth>
        <RoutesI.Dashboard />
      </WithAuth>
    ),
  },
];
