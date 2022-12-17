import { Box, SxProps } from "@mui/system";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { SearchBar } from "../../common/CommonSearchBar";

const inventoryBtnStyle: SxProps = {
  backgroundColor: "black",
  color: "white",
  borderRadius: 3,
  ":hover": { backgroundColor: "rgb(100,100,100)" },
  minWidth: "80px",
  height: "35px",
  m: 2,
  p: 2,
  fontWeight: "bold",
  fontSize: "13px",
};
export function InventorySearchBar() {
  const navi = useNavigate();

  return (
    <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
      <SearchBar
        btnStyle={inventoryBtnStyle}
        placeholder="Search SKU, Title, ISBN"
      />

      <Button
        onClick={() => navi("addItem")}
        sx={{
          fontSize: "10px",
          ...inventoryBtnStyle,
          minWidth: "100px",
          position: "absolute",
          right: -15,
          backgroundColor: "blue",
          ":hover": { backgroundColor: "rgba(0,0,255, 0.65)" },
        }}
      >
        Add Item
      </Button>
    </Box>
  );
}
