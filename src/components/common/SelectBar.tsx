import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function SelectBar({ selectedValue, handleChange, SelectOption }: {
    selectedValue: string;
    handleChange?: (event: SelectChangeEvent) => void;
    SelectOption?: string[]
}) {
    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            disableUnderline
            value={selectedValue}
            sx={{ backgroundColor: "white", height: '25px' }}
            onChange={handleChange}
        >
            {SelectOption?.map(val => {
                return <MenuItem key={val} value={val} >
                    {val}
                </MenuItem>
            })}
        </Select>
    )
}