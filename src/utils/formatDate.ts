import { format } from "date-fns";

export const formatDate = (date: Date) => {
  const timeLabel = date.toLocaleTimeString("pt-PT").substring(0, 5);
  const dateLabel = format(date, "dd MMM yyyy");
  return {
    timeLabel,
    dateLabel,
  };
};
