import { dashboardRoutes } from "./Dashboard";
import { dashboardBusinessDetailsRoutes } from "./Dashboard_Business_Details";

export const subpagesRoutes = [
  ...dashboardRoutes,
  ...dashboardBusinessDetailsRoutes,
];
