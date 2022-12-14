import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import { InventoryItemData } from "./InventoryDummyData";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

type Order = "asc" | "desc";

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof InventoryItemData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof InventoryItemData;
  label: string;
  numeric: boolean;
}
const headCells: readonly HeadCell[] = [
  {
    id: "Status",
    numeric: false,
    disablePadding: true,
    label: "Status",
  },
  {
    id: "Image",
    numeric: false,
    disablePadding: false,
    label: "Image",
  },
  {
    id: "SKU",
    numeric: true,
    disablePadding: false,
    label: "SKU",
  },
  {
    id: "Name",
    numeric: true,
    disablePadding: false,
    label: "Product Name",
  },
  {
    id: "Created",
    numeric: true,
    disablePadding: false,
    label: "Date Created",
  },

  {
    id: "SoldQuantity",
    numeric: true,
    disablePadding: false,
    label: "SoldQuantity",
  },
  {
    id: "Price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "ProductQuantity",
    numeric: true,
    disablePadding: false,
    label: "Product Quantity",
  },
  {
    id: "MinimumQuantity",
    numeric: true,
    disablePadding: false,
    label: "Min-DC Quantity",
  },
  {
    id: "DiscountRate",
    numeric: true,
    disablePadding: false,
    label: "DC Rate",
  },
];
export function TableHeaders(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof InventoryItemData) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead
      sx={{
        background:
          "linear-gradient(0deg, rgba(190,190,190,0.8) 0%, rgba(204,204,204,1) 30%, rgba(239,239,239,1) 100%)",
        border: "1px solid #bbbbbb",
        borderCollapse: "collapse",
        borderTop: "1px solid #ffffff",
      }}
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={
              headCell.id === "Image"
                ? { width: "250px" }
                : { minWidth: "80px" }
            }
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
