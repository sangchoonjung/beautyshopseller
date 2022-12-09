import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import { InventoryItemData } from './InventoryDummyData';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

type Order = 'asc' | 'desc';


interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof InventoryItemData) => void;
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
        id: 'Status',
        numeric: false,
        disablePadding: true,
        label: 'Status',
    },
    {
        id: 'Image',
        numeric: true,
        disablePadding: false,
        label: 'Image',
    },
    {
        id: 'SKU',
        numeric: true,
        disablePadding: false,
        label: 'SKU',
    },
    {
        id: 'Name',
        numeric: true,
        disablePadding: false,
        label: 'Product Name',
    },
    {
        id: 'Created',
        numeric: true,
        disablePadding: false,
        label: 'Date Created',
    },
    {
        id: 'Available',
        numeric: true,
        disablePadding: false,
        label: 'Available',
    },
    {
        id: 'FeePerSold',
        numeric: true,
        disablePadding: false,
        label: 'Estimated fee per unit sold',
    },
    {
        id: 'Price',
        numeric: true,
        disablePadding: false,
        label: 'Price and shipping cost',
    },
];
export function TableHeaders(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof InventoryItemData) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}