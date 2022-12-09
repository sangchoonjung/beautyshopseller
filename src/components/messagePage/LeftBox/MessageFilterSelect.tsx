import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { SelectBar } from '../../common/SelectBar';


const SelectOption: string[] = [
    "All Messages",
    "test1 Message",
    "test2MEssagessage"
]

export function MessageFilterSelect() {
    const [filter, setFilter] = React.useState('All Messages');
    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    return (
        <FormControl size="small" >
            <SelectBar SelectOption={SelectOption} selectedValue={filter} handleChange={handleChange} />
        </FormControl>
    )
}