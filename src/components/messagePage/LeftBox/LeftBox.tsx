import { Box, SxProps } from "@mui/material";
import { MessageFilter } from "./MessageFilter";
import { MessagePreviewBox } from "./MessagePreviewBox";
import { MessageSearchBar } from "./MessageSearchBar";

export const BoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  height: "90vh",
  minHeight: "500px",
  width: "30vw",
  maxWidth: "400px",
  minWidth: "250px",
};

export default function LeftBox() {
  return (
    <Box
      sx={{
        ...BoxStyle,
        borderRight: "1px solid #c7c7c7",
      }}
    >
      <MessageFilter />
      <MessageSearchBar />
      <MessagePreviewBox />
    </Box>
  );
}
