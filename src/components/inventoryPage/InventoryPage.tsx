import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  //   datas,
  InventoryItemData,
} from "./InventoryContent/ContentParts/InventoryDummyData";
import InventoryContent from "./InventoryContent/InventoryContentBody";
import {
  InventoryFilter,
  StatusList,
} from "./InventoryContent/InventoryFilter";
import { InventorySearchBar } from "./InventoryContent/InventorySearchBar";
import { InventoryTitle } from "./InventoryContent/InventoryTItle";
import React from "react";

export default function InventoryPage() {
  const [rows, setRows] = React.useState<InventoryItemData[]>([]);
  const [filter, setFilter] = React.useState<string>("All");
  //   console.log(localStorage.getItem("token"));

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
      const data = await response.json();
      console.log(data);
      setRows(data?.message! as InventoryItemData[]);
    };

    if (filter !== "All") {
      setRows((current) => current!.filter((i) => i.Status === filter));
    } else {
      setRows((current) => current!);
    }
    getInventoryData();
  }, [filter]);

  return (
    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <Box sx={{ m: 2 }}>
        <InventoryTitle />
        <InventorySearchBar />
        <InventoryFilter setFilter={setFilter} />
        <InventoryContent rows={rows} />
      </Box>
    </Box>
  );
}
