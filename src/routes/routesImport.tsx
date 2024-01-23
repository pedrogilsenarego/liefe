import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";

export const RoutesI = {
  Home: lazyWithRetryAndLoader(() => import("../pages/Home")),
  Dashboard: lazyWithRetryAndLoader(() => import("../pages/Dashboard")),
  DashboardBusiness: lazyWithRetryAndLoader(
    () => import("../pages/Dashboard_Business")
  ),
  DashboardBusinessDetails: lazyWithRetryAndLoader(
    () => import("../pages/Dashboard_Business_Detail")
  ),
};
