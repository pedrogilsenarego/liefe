import { Icons } from "../components/Icons";
import { Colors, mainColors } from "../theme/theme";

import { Feature } from "./types";

export const features: Feature[] = [
  {
    name: "Business",
    id: "business",
    color: Colors.tealc[400],
    icon: (
      <Icons.Business size={"40px"} color={mainColors.secondary.contrast} />
    ),
  },
  {
    name: "Vehicles",
    id: "vehicles",
    color: Colors.tealc[400],
    icon: <Icons.Car size={"40px"} color={mainColors.secondary.contrast} />,
  },
];
