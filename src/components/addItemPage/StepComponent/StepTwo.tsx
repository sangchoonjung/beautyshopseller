import { AddItemContext } from "../../../context/addItemContext";
import { StepTwoInput } from "./StepTwo/StepTwoInput";
import * as React from 'react';
import { StepTwoImage } from "./StepTwo/StepTwoImage";
import { Box, Typography } from "@mui/material";
import { ImagePreviewBox } from "./StepTwo/ImagePreviewBox";

export function StepTwo({ clickHandle }: { clickHandle: () => void }) {

    const { input, handleInputChange, dragAddHandle, files } = React.useContext(AddItemContext);
    const [emptyBoxCnt, setEmptyBoxCnt] = React.useState<number>(1);
    React.useEffect(() => {
        setEmptyBoxCnt(
            (4 - files!.length) > 0 ? 4 - files!.length : 1
        )
    }, [files!.length])
    console.log(emptyBoxCnt)
    return (
        <>
            <StepTwoInput input={input!} handleChange={handleInputChange!} />
            <Box px={2} mx={1} sx={{ maxWidth: '700px' }} onDrop={dragAddHandle} onDragOver={(evt) => {
                evt.preventDefault();
                evt.stopPropagation();
            }}>
                <Box sx={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                    < ImagePreviewBox dropHandle={dragAddHandle!} files={files!} />

                    {[...Array(emptyBoxCnt)].map((n, index) => {
                        return <StepTwoImage dropHandle={dragAddHandle!} clickHandle={clickHandle} />
                    })
                    }
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
                    <span style={{ cursor: "pointer", textDecoration: "underline", fontWeight: 600 }} onClick={clickHandle} >폴더에서 파일 찾기</span>
                </Box>
            </Box>

        </>
    )
}