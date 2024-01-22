import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/system";
import { Colors } from "../../theme/theme";

interface Props extends TooltipProps {
  children: any;
  title: string;
  maxWidth?: number;
}

const ToolTipJ = ({ children, title, maxWidth }: Props) => {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      color: Colors.blackish,
      maxWidth: maxWidth ?? 400,
      fontSize: "14px",
      border: `2px solid ${Colors.grey}`,
      fontWeight: "inherit",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: Colors.blackish,
    },
  }));
  return (
    <HtmlTooltip
      arrow
      title={
        <span
          dangerouslySetInnerHTML={{ __html: title }}
          style={{
            whiteSpace: "pre-line",
            color: Colors.redish[400],
          }}
        />
      }
    >
      {children}
    </HtmlTooltip>
  );
};

export default ToolTipJ;
