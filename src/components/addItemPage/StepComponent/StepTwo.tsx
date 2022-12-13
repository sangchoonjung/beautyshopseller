import { AddItemContext } from "../../../context/addItemContext";
import { StepTwoInput } from "./StepTwo/StepTwoInput";
import * as React from 'react';
import { StepTwoImage } from "./StepTwo/StepTwoImage";
import { ImageItem } from "./StepTwo/ImageItem";

export function StepTwo({ clickHandle }: { clickHandle: () => void }) {

    const { input, handleInputChange, dragAddHandle, files } = React.useContext(AddItemContext);

    return (
        <>
            <StepTwoInput input={input!} handleChange={handleInputChange!} />
            {
                // 여러개 할 거면 맵 돌리기
                files!.length > 0 ?
                    <ImageItem file={files![0]} /> :
                    <StepTwoImage dropHandle={dragAddHandle!} clickHandle={clickHandle} />
            }

        </>
    )
}