import { Box, SxProps } from "@mui/material";
import { MessageFilterSelect } from "./MessageFilterSelect";


const FilterStyle: SxProps = {
    backgroundColor: "#000080",
    px: 1,
    height: '65px',
    wordBreak: "keep-all",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

}
export function MessageFilter() {



    return (
        <Box sx={FilterStyle}>
            <h3 style={{ color: "white" }}>Messages</h3>
            <MessageFilterSelect />
        </Box>
    )
}