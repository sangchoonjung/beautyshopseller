import Box from '@mui/material/Box';


export function StepTwoImage({ clickHandle, dropHandle }: { clickHandle: () => void, dropHandle: React.DragEventHandler<Element> }) {


    return (
        <Box px={2} mx={1} maxWidth='700px' onDrop={dropHandle} onDragOver={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
        }}>
            <Box sx={{
                position: "relative", border: "1px dashed #a7a7a7 ",
                width: '100%', paddingBottom: "75%", borderRadius: 1.5,
                justifyContent: "center", alignItems: "center", display: "flex"
            }}>
                <Box position={"absolute"} sx={{ top: '48%', textAlign: "center" }}>
                    이미지를 여기로 Drag & Drop해 주세요<br />
                    <br />
                    <span style={{ cursor: "pointer", textDecoration: "underline", fontWeight: 600 }} onClick={clickHandle} >폴더에서 파일 찾기</span>
                </Box>
            </Box>
        </Box>
    )
}