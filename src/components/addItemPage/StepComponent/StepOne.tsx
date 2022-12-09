import { Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { SxProps } from "@mui/material/styles";
import { useState } from "react";
import { SelectBar } from "../../common/SelectBar";
import { categoryList } from "./StepsDescription";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

const StepOneBoxStyle: SxProps = {

    display: 'flex',
    flexDirection: 'row'
}
export function StepOne() {
    const [select, setSelect] = useState<string>("cleansing-Foam")
    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
    };
    return <>

        <Box sx={StepOneBoxStyle} >
            이름을 써라
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={select}
                // onChange={handleChange}
                helperText="Please select your currency"
            >
                {categoryList.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <TextField id="filled-basic" label="Filled" variant="filled" />

            카테고리를 골라라
            <SelectBar handleChange={handleChange} selectedValue={select} SelectOption={categoryList} />

            {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            가격을 입력해라
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl> */}
            수량을 입력해라


        </Box>



    </>

}