import Box from '@mui/material/Box';


export function StepEmptyImageBox({ clickHandle, size, holder }: { clickHandle?: () => void, size?: "m" | "l", holder?: string }) {
    let defaultSx = {
        position: "relative", border: "1px dashed #a7a7a7 ",
        width: '48%', paddingBottom: "36%", borderRadius: 1.5,
        my: "1%",
        justifyContent: "center", alignItems: "center", display: "flex"
    }
    if (size === "l") {
        defaultSx = { ...defaultSx, width: '72%', paddingBottom: "54%" }
    }
    return (
        <Box sx={{ ...defaultSx }}>
            <Box position={"absolute"} sx={{ top: '48%', textAlign: "center" }}>
                {holder ? holder : '이미지를 여기로 Drag & Drop해 주세요'}<br />
                <br />
            </Box>
        </Box>
    )
}