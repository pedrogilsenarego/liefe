import MainLayout from "../layouts/MainLayout";

import { ROUTE_PATHS } from "./constants";
import { RoutesI } from "./routesImport";
import { AppRoute } from "./types";

export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout>
        <RoutesI.Home />
      </MainLayout>
    ),
  },
];
