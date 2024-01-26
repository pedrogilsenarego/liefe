import { Typography } from "@mui/material";
import { useState } from "react";
import { Control } from "react-hook-form";
import { BusinessData } from "../../../../../types/business";

interface Props {
  control?: Control<any, any>;
  businessData: any;
}

const Details = ({ control, businessData }: Props) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  return (
    <div>
      <Typography onClick={() => setOpenDetails(!openDetails)} color="black">
        Details
      </Typography>
      {openDetails && (
        <div>
          <Typography color="black">{businessData.businessName}</Typography>
        </div>
      )}
    </div>
  );
};

export default Details;
