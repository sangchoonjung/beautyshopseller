import { Box, SxProps } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
const FilterBoxStyle: SxProps = {
    display: "flex", alignItems: "center",
    backgroundColor: "#efefef", px: 2, py: 1,
    border: '1px solid #bbbbbb', borderCollapse: "collapse"
}

export const StatusList = [
    "All", "Active", "Inactive", "Incomplete", "Listing Removed", "Search Suppressed"
]
export function InventoryFilter({ setFilter }: { setFilter: (filter: string) => void }) {

    return (
        <Box sx={FilterBoxStyle}>
            <>
                <span style={{ color: "#777777", width: '80px' }}>Filters:</span> <span style={{ marginRight: 5 }}>Status:</span>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="All"
                        name="radio-buttons-group" sx={{ display: 'flex', flexDirection: "row" }}
                    >
                        {StatusList.map(stat => {
                            return <FormControlLabel onClick={() => { setFilter(stat) }} key={stat} value={stat} control={<Radio />} label={<span style={{ fontSize: '14px', wordSpacing: -2 }}> {stat}</span>} />
                        })}
                    </RadioGroup>
                </FormControl>
            </>

        </Box>
    )
}