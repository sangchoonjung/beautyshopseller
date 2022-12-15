import { Box, Typography } from "@mui/material";
export function ImageSearchToFolder({ clickHandle }: { clickHandle: () => void }) {
    return (<Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
        <Typography sx={{ cursor: "pointer", textDecoration: "underline", fontWeight: 600, ":hover": { backgroundColor: "#eeeeee" }, px: 1, py: 0.5 }} onClick={clickHandle} >폴더에서 파일 찾기</Typography>
    </Box>)
}