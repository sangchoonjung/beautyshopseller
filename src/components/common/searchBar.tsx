import { Button, SxProps, TextField } from "@mui/material";
interface SearchBarProps {
  placeholder?: string;
  searchHandle?: () => void;
  btnStyle?: SxProps;
}

export function SearchBar({
  placeholder,
  searchHandle,
  btnStyle,
}: SearchBarProps) {
  return (
    <>
      <TextField
        size="small"
        sx={{
          minWidth: "190px",
          flex: 1,
          "& .MuiInputBase-input": {
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
        }}
        placeholder={placeholder}
        inputProps={{
          style: { fontSize: "12px", fontStyle: "italic" },
        }}
        id="outlined-basic"
        variant="outlined"
      />
      <Button
        onClick={searchHandle}
        sx={{ minWidth: "45px", fontSize: "10px", ...btnStyle }}
      >
        Search
      </Button>
    </>
  );
}
