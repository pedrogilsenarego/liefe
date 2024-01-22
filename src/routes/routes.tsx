import MainLayout from "../layouts/MainLayout";
import { subpagesRoutes } from "./SubpagesRoutes";

import { ROUTE_PATHS } from "./constants";
import { RoutesI } from "./routesImport";
import { AppRoute } from "./types";

export const routes: AppRoute[] = [
  ...subpagesRoutes,
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout>
        <RoutesI.Home />
      </MainLayout>
    ),
  },
];
