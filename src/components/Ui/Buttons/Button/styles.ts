import { CSS, Colors } from "../../../../theme/theme";

interface Props {
  hover: boolean;
  darkenColors?: boolean;
  lightenColor?: boolean;
}

export const buttonStyle = ({ hover, darkenColors, lightenColor }: Props) => ({
  backgroundColor: !hover
    ? lightenColor
      ? Colors.white[40010]
      : darkenColors
      ? Colors.black[40010]
      : Colors.black[40005]
    : lightenColor
    ? Colors.white[40050]
    : darkenColors
    ? Colors.black[40025]
    : Colors.white[40010],
  fontWeight: "bold",
  color: Colors.white[400],
  borderRadius: "40px",
  padding: "8px 40px",
  textTransform: "capitalize",
  marginTop: "5px",
  border: `solid 2px ${Colors.black[40050]}`,
});
