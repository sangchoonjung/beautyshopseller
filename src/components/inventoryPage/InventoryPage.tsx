import Box from "@mui/material/Box";
import { datas } from "./InventoryContent/ContentParts/InventoryDummyData";
import InventoryContent from "./InventoryContent/InventoryContentBody";
import { InventoryFilter } from "./InventoryContent/InventoryFilter";
import { InventorySearchBar } from "./InventoryContent/InventorySearchBar";
import { InventoryTitle } from "./InventoryContent/InventoryTItle";
import React from 'react'


export default function InventoryPage() {

    const [rows, setRows] = React.useState(datas)

    return (
        <Box sx={{ flex: 1, display: 'flex', height: '90vh', overflowY: "scroll" }}>
            <Box sx={{ m: 2 }}>
                <InventoryTitle />
                <InventorySearchBar />
                <InventoryFilter />
                <InventoryContent rows={rows} />
            </Box>
        </Box>
    )
}