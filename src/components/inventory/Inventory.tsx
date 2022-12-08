import Box from "@mui/material/Box";
import InventoryContent from "./InventoryContent/InventoryContentBody";
import { InventoryFilter } from "./InventoryContent/InventoryFilter";
import { InventorySearchBar } from "./InventoryContent/InventorySearchBar";
import { InventoryTitle } from "./InventoryContent/InventoryTItle";



export default function Inventory() {


    return (
        <Box sx={{ m: 2 }}>
            <InventoryTitle />
            <InventorySearchBar />
            <InventoryFilter />
            <InventoryContent />
        </Box>
    )
}