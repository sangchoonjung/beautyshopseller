import { MessagePreviewItem } from "./MessagePreviewItem";
import { Box, SxProps } from "@mui/material";

export function MessagePreviewBox() {


    return (<>

        <Box sx={{ display: 'flex', flexDirection: "column",flex:1 }} >
            <Box sx={{ flex: 1 }}>
                {
                    ['test1', 'test2', 'test3'].map(i => (
                        <MessagePreviewItem key={i} />
                    ))
                }
            </Box>
        </Box>
        <Box sx={{borderTop:"1px solid #c7c7c7" ,textAlign:"center"}}>
            {`< 1 >`}
        </Box>
    </>)
}