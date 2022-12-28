import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as React from "react";
import { AddItemContext } from "../../../context/addItemContext";
import { ImageItem } from "./StepImage/ImageItem";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { InventoryItemData } from "../../inventoryPage/InventoryContent/ContentParts/InventoryDummyData";
import SERVER_IP from "../../../util/serverIP";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function StepEndConfirm({ handleReset }: { handleReset: () => void }) {
  const ctx = React.useContext(AddItemContext);
  const navi = useNavigate();
  const addItemSubmitHandle = async () => {
    try {
      // ctx.mainFile && ctx.input?.name &&
      //유효성검사
      const submitForm = new FormData();
      //메인이미지
      submitForm.append("mainImage", ctx.mainFile!);
      //데이터 전체
      submitForm.append("input", JSON.stringify(ctx.input));

      if (ctx.files?.length ?? 0 > 0) {
        ctx.files?.forEach((file) => submitForm.append("subImage", file));
      }
      //서브이미지 있으면 첨부

      console.log(ctx.input);

      const response = await fetch(SERVER_IP + "/api/product/addProduct", {
        method: "POST",
        body: submitForm,
        headers: {
          "x-access-token": localStorage.getItem("token") as string,
        },
      });
      const finish: { result: boolean; message: InventoryItemData | string } =
        await response.json();
      if (finish.result) {
        navi("/inventory");
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log(e);
      }
    }
  };
  return (
    <>
      <Paper square elevation={0} sx={{ p: 3, position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {ctx.mainFile && <ImageItem size="l" file={ctx.mainFile!} />}
          <Box
            sx={{
              display: "flex",
              width: "110%",
              position: "relative",
              wordBreak: "keep-all",
              justifyContent: "center",
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ overflowX: "scroll" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Product Name</StyledTableCell>
                    <StyledTableCell align="center">Category</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">
                      Amount (Unit)
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Country of Origin
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Description
                    </StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">
                      Min-Discount Amount
                    </StyledTableCell>
                    <StyledTableCell align="center">Deadline</StyledTableCell>
                    <StyledTableCell align="center">
                      DiscountRate
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
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
                    <StyledTableCell
                      sx={{
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      align="left"
                    >
                      {ctx.input?.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ctx.input?.status}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {ctx.input?.minimumAmount}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ctx.input?.deadline.toString()}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {ctx.input?.discountRate}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={addItemSubmitHandle}
              sx={{ mt: 1, mr: 1 }}
            >
              ADD ITEM
            </Button>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              BACK
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
