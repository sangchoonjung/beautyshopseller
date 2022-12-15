import { SxProps } from "@mui/material/styles";
import { categoryList } from "./StepsDescription";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { ItemState } from "../AddItemPage";
import { StepEmptyImageBox } from "./StepImage/StepEmptyImageBox";
import { AddItemContext } from "../../../context/addItemContext";
import { ImageSearchToFolder } from "./StepImage/ImageSearchToFolder";
import { ImagePreviewBox } from "./StepImage/ImagePreviewBox";
import { ImageItem } from "./StepImage/ImageItem";

const StepOneItemStyle: SxProps = {
    justifyContent: "space-between", display: "flex", p: 2
}
export function StepOne({ input, handleChange }: { input: ItemState, handleChange: Function }) {
    const ctx = React.useContext(AddItemContext);
    const ref = React.useRef<HTMLInputElement>(null!)
    const { dragAddHandle, mainFile, fileSelectHandle } = ctx;

    const clickHandle = () => {
        ref.current.click()
    }

    return <>
        <Box onDrop={dragAddHandle!("main")} onDragOver={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
        }} >
            <Box sx={StepOneItemStyle}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField
                        onChange={handleChange("name")}
                        sx={{ maxWidth: "500px" }} id="filled-basic" label="상품명" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField
                        sx={{ maxWidth: "500px" }}
                        id="outlined-select-currency"
                        select
                        label="카테고리"
                        fullWidth
                        value={input.category}
                        onChange={handleChange('category')}
                    >
                        {categoryList.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            </Box>
            <Box sx={StepOneItemStyle} >
                <FormControl fullWidth sx={{ m: 1, px: 0.5 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">가격</InputLabel>
                    <Input
                        sx={{ maxWidth: "500px", px: 1 }}
                        id="standard-adornment-amount"
                        value={input.price}
                        type={"number"}
                        onChange={handleChange('price')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, px: 0.5 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">수량</InputLabel>
                    <Input
                        sx={{ maxWidth: "500px", px: 1 }}
                        id="standard-adornment-amount"
                        value={input.amount}
                        type={"number"}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        endAdornment={<InputAdornment position="start">Unit</InputAdornment>}
                    />
                </FormControl>
            </Box>
            <Box m={1} p={2} sx={{ display: 'flex', justifyContent: "center" }}>
                {!mainFile && <StepEmptyImageBox size="l" holder="대표 이미지를 Drag & Drop해 주세요" />}
                {mainFile && <ImageItem file={mainFile!} size="l" />}

            </Box>
            <ImageSearchToFolder clickHandle={clickHandle} />
        </Box>
        <input onChange={fileSelectHandle!("main")} type={"file"} ref={ref} style={{ display: "none" }} accept="image/*" />
    </>

}