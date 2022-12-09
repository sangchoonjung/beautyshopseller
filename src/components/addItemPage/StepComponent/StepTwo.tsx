import { Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { SxProps } from "@mui/material/styles";
import { useState } from "react";
import { SelectBar } from "../../common/SelectBar";
import { categoryList } from "./StepsDescription";

const StepOneBoxStyle: SxProps = {

    display: 'flex',
    flexDirection: 'column'
}

export function StepOne() {
    const [select, setSelect] = useState<string>("cleansing-Foam")
    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
    };
    return <>

        <Box sx={StepOneBoxStyle} >
            이름을 써라
            <Box>

            </Box>
            카테고리를 골라라
            <Box>
                <SelectBar handleChange={handleChange} selectedValue={select} SelectOption={categoryList} />
            </Box>
            가격을 입력해라
            수량을 입력해라


        </Box>



    </>

}