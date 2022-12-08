import { Button, SxProps, Box, TextField } from "@mui/material";
import { SearchBar } from "../../common/searchBar";
const MessageSearchBarStyle: SxProps = { display: 'flex', height: '50px', alignItems: "center", mx: '3px' }
export function MessageSearchBar() {



    return (

        <Box sx={MessageSearchBarStyle}>
            <SearchBar placeholder="Enter Order ID or Email Address" />

        </Box>
    )
}