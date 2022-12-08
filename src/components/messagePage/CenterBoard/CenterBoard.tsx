import { Box, } from "@mui/material";
import MessageBody from "./MessageBody";
import { MessageTitle } from "./MessageTitle";


export default function CenterBoard() {


    return (<>
        <Box sx={{ flex: 1 }}>
            <MessageTitle />
            <MessageBody />
        </Box>
    </>)
}