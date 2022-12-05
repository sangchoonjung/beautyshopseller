import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function MessageFilterSelect() {
    const [filter, setFilter] = React.useState('all');
    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    return (
        <FormControl size="small" >
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                disableUnderline
                value={filter}
                sx={{ backgroundColor: "white", height: '25px' }}
                onChange={handleChange}
            >
                <MenuItem value={'all'}>All Messages</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}