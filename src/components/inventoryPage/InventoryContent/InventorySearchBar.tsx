import { Box, SxProps } from "@mui/system";
import { SearchBar } from "../../common/searchBar";
const inventoryBtnStyle: SxProps = {
    backgroundColor: "black",
    color: 'white',
    borderRadius: 3,
    ":hover": { backgroundColor: "rgb(100,100,100)" },
    minWidth: '80px',
    height: '35px', m: 2, p: 2,
    fontWeight: "bold",
    fontSize: "13px"
}
export function InventorySearchBar() {

    return (
        <Box sx={{ display: 'flex', alignItems: "center", width: '200px' }}>
            <SearchBar btnStyle={inventoryBtnStyle} placeholder="Search SKU, Title, ISBN" />
        </Box>
    )
}