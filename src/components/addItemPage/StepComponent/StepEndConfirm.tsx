import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AddItemContext } from '../../../context/addItemContext';
import { ImageItem } from './StepImage/ImageItem';

import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export function StepEndConfirm({ handleReset }: { handleReset: () => void }) {
    const ctx = React.useContext(AddItemContext);


    const addItemSubmitHandle = async () => {
        try {
            // ctx.mainFile && ctx.input?.name &&
            //유효성검사
            const submitForm = new FormData();
            submitForm.append("mainImage", ctx.mainFile!);

            submitForm.append("input", JSON.stringify(ctx.input));

            const response = await fetch("http://localhost:8080/api/userInfo/zzim", {
                method: "POST",
                body: submitForm
            })
            console.log(await response.json())
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.log(e.message)
            } else {
                console.log(e)
            }
        }
    }
    return (
        <>
            <Paper square elevation={0} sx={{ p: 3, position: "relative", }}>
                <Box sx={{ display: 'flex', alignItems: "center", flexDirection: "column" }}>
                    {ctx.mainFile && <ImageItem size='l' file={ctx.mainFile!} />}
                    <Box sx={{ display: 'flex', width: '110%', position: "relative", wordBreak: "keep-all", justifyContent: "center" }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ overflowX: "scroll" }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Product Name</StyledTableCell>
                                        <StyledTableCell align="center">Category</StyledTableCell>
                                        <StyledTableCell align="center">Price</StyledTableCell>
                                        <StyledTableCell align="center">Amount (Unit)</StyledTableCell>
                                        <StyledTableCell align="center">Country of Origin</StyledTableCell>
                                        <StyledTableCell align="center">Description</StyledTableCell>
                                        <StyledTableCell align="center">Status</StyledTableCell>
                                        <StyledTableCell align="center">Available</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow >
                                        <StyledTableCell component="th" scope="row">
                                            {ctx.input?.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {ctx.input?.category}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {ctx.input?.price}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {ctx.input?.amount}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {ctx.input?.country}
                                        </StyledTableCell>
                                        <StyledTableCell sx={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis" }} align="left">
                                            {ctx.input?.description}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {ctx.input?.status}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {ctx.input?.available === "Available" ?
                                                <span style={{ color: "black", textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em red" }}>Available
                                                </span>
                                                :
                                                <span> Unavailable
                                                </span>}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box>
                        <Button variant='contained' onClick={addItemSubmitHandle} sx={{ mt: 1, mr: 1 }}>
                            ADD ITEM
                        </Button>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            BACK
                        </Button>
                    </Box>
                </Box>

            </Paper >
        </>
    )
}