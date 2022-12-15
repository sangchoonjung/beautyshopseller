import { AddItemContext } from "../../../context/addItemContext";
import { StepTwoInput } from "./StepTwo/StepTwoInput";
import * as React from 'react';
import { StepEmptyImageBox } from "./StepImage/StepEmptyImageBox";
import { Box } from "@mui/material";
import { ImagePreviewBox } from "./StepImage/ImagePreviewBox";
import { ImageSearchToFolder } from "./StepImage/ImageSearchToFolder";

export function StepTwo({ clickHandle }: { clickHandle: () => void }) {
    const { input, handleInputChange, dragAddHandle, files } = React.useContext(AddItemContext);
    const [emptyBoxCnt, setEmptyBoxCnt] = React.useState<number>(1);
    React.useEffect(() => {
        setEmptyBoxCnt(
            (4 - files!.length) > 0 ? 4 - files!.length : 1
        )
    }, [files!.length])
    return (
        <>
            <StepTwoInput input={input!} handleChange={handleInputChange!} />
            <Box px={2} mx={1} sx={{ maxWidth: '700px' }} onDrop={dragAddHandle!()} onDragOver={(evt) => {
                evt.preventDefault();
                evt.stopPropagation();
            }}>
                <Box sx={{ display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                    < ImagePreviewBox files={files!} />
                    {[...Array(emptyBoxCnt)].map((n, index) => {
                        return <StepEmptyImageBox key={index} clickHandle={clickHandle} size="m" />
                    })
                    }
                </Box>
                <ImageSearchToFolder clickHandle={clickHandle} />
            </Box>

        </>
    )
}