import Box from "@mui/material/Box";
import { InventoryItemData } from "./InventoryContent/ContentParts/InventoryDummyData";
import InventoryContent from "./InventoryContent/InventoryContentBody";
import { InventoryFilter } from "./InventoryContent/InventoryFilter";
import { InventorySearchBar } from "./InventoryContent/InventorySearchBar";
import { InventoryTitle } from "./InventoryContent/InventoryTItle";
import React from "react";

export default function InventoryPage() {
  const [rows, setRows] = React.useState<InventoryItemData[]>([]);
  const [filter, setFilter] = React.useState<string>("All");
  const [filteredItems, setFilteredItems] = React.useState<InventoryItemData[]>(rows);
  React.useEffect(() => {
    const getInventoryData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/product/getProductList",
        {
          method: "POST",
          headers: {
            "x-access-token": localStorage.getItem("token") as string,
          },
        }
      );
      const data: { result: boolean, message: string | InventoryItemData[] } = await response.json();
      console.log(data);
      if (data.result) {
        setRows(data?.message! as InventoryItemData[]);
      } else {

      }
    };
    getInventoryData();

  }, [])
  React.useEffect(() => {
    if (filter !== "All") {
      setFilteredItems(rows!.filter((i) => i.Status === filter));
    } else {
      setFilteredItems(rows);
    }
  }, [filter, rows]);

  return (
    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <Box sx={{ m: 2 }}>
        <InventoryTitle />
        <InventorySearchBar />
        <InventoryFilter setFilter={setFilter} />
        <InventoryContent rows={filteredItems} />
      </Box>
    </Box>
  );
}
