import { Box, } from "@mui/material";


export function MessageTitle() {


    return (
        <Box sx={{ p: 1, borderBottom: "1px solid #c7c7c7" }}>
            <Box>
                <span style={{ display: "block" }}><span style={{ fontSize: "24px", fontWeight: 600 }}>이름</span> 이메일@이메일</span>
                <span>제품명???</span>
            </Box>
        </Box>
    )
}