import { Box, Typography, SxProps } from "@mui/material";

const PreviewItemBoxStyle = {
    px: 2,
    borderTop: "1px solid #c7c7c7"
}
export function MessagePreviewItem() {


    return (
        <Box sx={PreviewItemBoxStyle}>
            <Typography>
                이름
                <span style={{ float: 'right' }}>날짜</span>
            </Typography>
            <Typography>
                제품명
            </Typography>
        </Box>
    )
}