import { Box } from "@mui/material";
import MainBodyBox from "./MainBodyBox";
import MainHeaderBox from "./MainHeaderBox";

function Main() {
  console.log(localStorage.getItem("token"));
  return (
    <Box>
      <MainHeaderBox />
      <MainBodyBox />
    </Box>
  );
}

export default Main;
