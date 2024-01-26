import { Typography } from "@mui/material";
import { Control } from "react-hook-form";

interface Props {
  control?: Control<any, any>;
}

const Details = ({ control }: Props) => {
  return (
    <div>
      <Typography>Details</Typography>
    </div>
  );
};

export default Details;
