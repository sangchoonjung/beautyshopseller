import { ReactNode } from "react";
import Headers from "./Headers";
import * as React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

function BaseLayer({ children }: { children?: React.ReactElement }) {
  return (
    <Box sx={{ height: "100%" }}>
      <Headers />
      <main>
        <Outlet />
      </main>
      {/* {children} */}
      <Box>바닥글ssssssssssssssss</Box>
    </Box>
  );
}

export default BaseLayer;
