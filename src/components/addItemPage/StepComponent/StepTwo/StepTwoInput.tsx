import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { ItemState } from "../../AddItemPage";



const StepOneItemStyle: SxProps = {
    display: "flex", p: 2, flexDirection: "column", mx: 1
}
export function StepTwoInput({ input, handleChange }: { input: ItemState, handleChange: Function }) {



    return <>
        <Box >
            <Box sx={StepOneItemStyle}>
                <FormControl fullWidth sx={{ my: 1 }} variant="standard">
                    <TextField sx={{ maxWidth: "700px" }} id="filled-basic" label="생산국" fullWidth
                        value={input.country} onChange={handleChange("country")}
                    />
                </FormControl>

                <TextField
                    sx={{ my: 1, maxWidth: '700px' }} label="상세설명"
                    variant="outlined"
                    multiline fullWidth
                    rows={3}
                    value={input.description}
                    placeholder="내용을 입력해주세요."
                    onChange={handleChange("description")}
                />
            </Box>
        </Box>

    </>

}