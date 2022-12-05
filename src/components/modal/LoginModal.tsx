import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PartOfLoginInput from "../aboutLogin/PartOfLoginInput";
import PartOfFindIdAndPass from "../aboutLogin/PartOfFindIdAndPass";
import { useState, useContext } from "react";
import LoginStateContextProvider, {
  LoginStateContext,
} from "../../context/LoginStateContext";
import PartOfSignUpButton from "../aboutSignUp/PartOfSignUpButton";
import PartOfSignUpInput from "../aboutSignUp/PartOfSignUpInput";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function LoginModalContainer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const LoginCtx = useContext(LoginStateContext);
  console.log(LoginCtx?.LoginModalState, "상태");

  return (
    <Box sx={{ width: "200px" }}>
      <Typography onClick={handleOpen}>Login</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {LoginCtx?.LoginModalState == "Login" && (
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                로그인 모달
              </Typography>
              <PartOfLoginInput />
              <PartOfFindIdAndPass />
              <PartOfSignUpButton />
            </Box>
          )}
          {LoginCtx?.LoginModalState == "SignUp" && (
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                가입하기 모달
              </Typography>
              <PartOfSignUpInput />
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
function LoginModal() {
  return (
    <LoginStateContextProvider>
      <LoginModalContainer />
    </LoginStateContextProvider>
  );
}

export default LoginModal;
