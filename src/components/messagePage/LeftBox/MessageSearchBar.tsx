import { Button, SxProps, Box, TextField } from "@mui/material";
const MessageSearchBarStyle: SxProps = { display: 'flex', height: '50px',alignItems:"center",mx:'3px' }
export function MessageSearchBar() {



    return (

        <Box sx={MessageSearchBarStyle}>
            <TextField size="small" sx={{
                minWidth: '190px', flex: 1,
                "& .MuiInputBase-input": {
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }
            }} placeholder="Enter Order ID or Email Address" inputProps={{
                style: { fontSize: "12px", fontStyle: "italic" }
            }}
                id="outlined-basic" variant="outlined" />
            <Button sx={{ minWidth: '45px', fontSize: '10px' }}>
                Search(임시)
            </Button>
        </Box>
    )
}