import Box from '@mui/material/Box';


export function StepTwoImage({ clickHandle, dropHandle }: { clickHandle: () => void, dropHandle: React.DragEventHandler<Element> }) {


    return (

        <Box sx={{
            position: "relative", border: "1px dashed #a7a7a7 ",
            width: '48%', paddingBottom: "36%", borderRadius: 1.5,
            my: "1%",
            justifyContent: "center", alignItems: "center", display: "flex"
        }}>
            <Box position={"absolute"} sx={{ top: '48%', textAlign: "center" }}>
                이미지를 여기로 Drag & Drop해 주세요<br />
                <br />
            </Box>
        </Box>
    )
}