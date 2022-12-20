import { Box } from "@mui/material";

function MainHeaderBox() {
  const headerBoxCategory = ["전체주문", "오늘 판매금", "전체판매금"];
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {headerBoxCategory.map((one) => {
        return (
          <Box key={one}>
            <Box
              sx={{
                border: "solid 1px #999999",
                p: 3,
                mt: 1,
                mx: 3,
              }}
            >
              {one}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default MainHeaderBox;
