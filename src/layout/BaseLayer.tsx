import { ReactNode } from "react";
import Headers from "./Headers";
import * as React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

function BaseLayer({ children }: { children?: React.ReactElement }) {
  return (
    <Box sx={{ height: "100%" }}>
      <Headers />
      <main>
        <Outlet />
      </main>
      {/* {children} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="./images/BeautyShopLogo.png" width={30} />
        <Typography>Copyright ©BeautyShop Corp.All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
}

export default BaseLayer;
