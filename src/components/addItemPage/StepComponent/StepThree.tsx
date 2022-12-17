import { Box } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { StatusList } from "./StepsDescription";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { ItemState } from "../AddItemPage";
import { StepOneItemStyle } from "./StepOne";
const StepOneBoxStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column'
}

export function StepThree({ input, handleChange }: { input: ItemState, handleChange: Function }) {

    return <>
        <Box sx={StepOneBoxStyle} >
            <Box sx={StepOneItemStyle}>

                <FormControl fullWidth sx={{ m: 1, px: 0.5 }} variant="standard">
                    <span style={{ fontWeight: 600 }}>Minimum Discount Amount :</span>
                    <Input
                        sx={{ maxWidth: "500px", px: 1 }}
                        id="standard-adornment-amount"
                        value={input.minimumAmount}
                        type={"number"}
                        onChange={handleChange('minimumAmount')}
                        startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        endAdornment={<InputAdornment position="start">Unit</InputAdornment>}
                    />
                </FormControl>
                
                <FormControl fullWidth sx={{ m: 1, px: 0.5 }} variant="standard">
                    <span style={{ fontWeight: 600 }}>Discount Rate :</span>
                    <Input
                        sx={{ maxWidth: "500px", px: 1 }}
                        id="standard-adornment-amount"
                        value={input.discountRate}
                        type={"number"}
                        onChange={handleChange('discountRate')}
                        startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        endAdornment={<InputAdornment position="start">%</InputAdornment>}
                    />
                </FormControl>
                    
                </Box>
                <Box sx={StepOneItemStyle}>
                <FormControl fullWidth sx={{ m: 1, px: 0.5 }} variant="standard">
                    <span style={{ fontWeight: 600 }}>Status :</span>
                    <TextField
                        sx={{ maxWidth: "500px", px: 1 }}
                        id="outlined-select-currency"
                        select
                        fullWidth
                        value={input.status}
                        onChange={handleChange('status')}
                    >
                        {StatusList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, px: 0.5 }} variant="standard">
                    <span style={{ fontWeight: 600 }}>Deadline :</span>
                    <Input
                        sx={{ maxWidth: "500px", px: 1,my:1.5 }}
                        // id="outlined-select-currency"
                        fullWidth
                        type={"date"}
                        value={input.deadline}
                        onChange={handleChange('deadline')}
                    />
                        {/* {["Available", "Unavailable"].map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))} */}
                </FormControl>
            </Box>
        </Box>
    </>

}