import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { datas } from "./InventoryContent/ContentParts/InventoryDummyData";
import InventoryContent from "./InventoryContent/InventoryContentBody";
import { InventoryFilter, StatusList } from "./InventoryContent/InventoryFilter";
import { InventorySearchBar } from "./InventoryContent/InventorySearchBar";
import { InventoryTitle } from "./InventoryContent/InventoryTItle";
import React from 'react'


export default function InventoryPage() {

    const [rows, setRows] = React.useState(datas)
    const [filter, setFilter] = React.useState<string>("All")
    React.useEffect(() => {
        if (filter !== "All") {
            setRows(datas.filter(i => i.Status === filter))
        } else {
            setRows(datas);
        }
    }, [filter])
    return (
        <Box sx={{ flex: 1, display: 'flex', justifyContent: "center" }}>
            <Box sx={{ m: 2 }}>
                <InventoryTitle />
                <InventorySearchBar />
                <InventoryFilter setFilter={setFilter} />
                <InventoryContent rows={rows} />
            </Box>
        </Box>
    )
}