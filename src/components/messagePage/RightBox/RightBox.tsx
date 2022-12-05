import { Box } from "@mui/material";
import { BoxStyle } from "../LeftBox/LeftBox";



export default function RightBox() {


    return <Box sx={{ ...BoxStyle, borderLeft: '1px solid #c7c7c7' }}>
        <Box>
            링크

        </Box>
        <Box>
            오더
        </Box>
    </Box>

}