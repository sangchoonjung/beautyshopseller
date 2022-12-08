import { Box, } from "@mui/material";
import CenterBoard from "./CenterBoard/CenterBoard";
import LeftBox from "./LeftBox/LeftBox";
import RightBox from "./RightBox/RightBox";

export default function MessagePage() {







    return <>
        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
            <LeftBox />
            <CenterBoard />
            <RightBox />
        </Box>
    </>
}