import { Box, } from "@mui/material";
import LeftBox from "./LeftBox/LeftBox";
import RightBoard from "./RightBoard/RightBoard";
import RightBox from "./RightBox/RightBox";

export default function MessagePage() {







    return <>
        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
            <LeftBox />
            <RightBoard />
            <RightBox />
        </Box>
    </>
}