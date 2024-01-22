import {
  Box,
  BoxProps,
  Checkbox,
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  TableContainer as MuiTableContainer,
  TableRow as MuiTableRow,
  styled,
} from "@mui/material";
import { Colors } from "../../theme/theme";

export const CheckboxContainer = styled(Checkbox)({
  height: "24px",
});

export const TableContainer = styled(MuiTableContainer)(() => ({
  position: "relative",
  maxHeight: "90%",
  padding: "10px",
}));

interface TableRowProps {
  checked?: boolean;
}

export const TableRow = styled(MuiTableRow)(({ checked }: TableRowProps) => ({
  background: checked ? "#FFF7DF" : "transparent",
  color: "#333333",
}));

interface TableCellProps extends MuiTableCellProps {
  isFirstRow?: boolean;
  onClick?: any;
}

export const TableCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) => prop !== "isFirstRow",
})<TableCellProps>(({ isFirstRow, onClick }) => ({
  borderBottom: `1px solid ${Colors.white[40050]}`,
  fontSize: isFirstRow ? "14px" : "14px",
  fontWeight: isFirstRow ? "bold" : "default",
  paddingInline: isFirstRow ? "0px" : "10px",
  paddingTop: isFirstRow ? "16px" : "6px",
  paddingBottom: isFirstRow ? "4px" : "6px",
  color: isFirstRow ? Colors.black[400] : Colors.black[400],
  cursor: onClick ? "pointer" : "default",
  backgroundColor: isFirstRow ? "inherit" : Colors.black[40025],
}));

export const ActionContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

interface TableChipProps extends BoxProps {
  bgColor?: string;
}

export const TableChip = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isFirstRow",
})<TableChipProps>(({ bgColor }) => ({
  fontSize: "14px",
  borderRadius: "12px",
  padding: "2px 10px",
  display: "initial",
  textAlign: "center",
  backgroundColor: bgColor,
  color: "white",
}));
