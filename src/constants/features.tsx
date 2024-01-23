import { Icons } from "../components/Icons";
import { ROUTE_PATHS } from "../routes/constants";
import { Colors, mainColors } from "../theme/theme";

import { Feature } from "./types";

export const features: Feature[] = [
  {
    name: "Business",
    id: "business",
    color: Colors.tealc[400],
    icon: (
      <Icons.Business size={"30px"} color={mainColors.secondary.contrast} />
    ),
    route: ROUTE_PATHS.DASHBOARD_BUSINESS,
  },
  {
    name: "Expenses",
    id: "expenses",
    color: Colors.pacificBlue[400],
    icon: <Icons.Money size={"30px"} color={mainColors.secondary.contrast} />,
    route: ROUTE_PATHS.DASHBOARD,
  },
  {
    name: "Vehicles",
    id: "vehicles",
    color: Colors.purple[400],
    icon: <Icons.Car size={"30px"} color={mainColors.secondary.contrast} />,
    route: ROUTE_PATHS.DASHBOARD,
  },
  {
    name: "Schedule",
    id: "schedule",
    color: Colors.purple[400],
    icon: (
      <Icons.Calendar size={"30px"} color={mainColors.secondary.contrast} />
    ),
    route: ROUTE_PATHS.DASHBOARD,
  },
];
