import { Box, Button, TextField, Typography } from "@mui/material";
import { LoginStateContext } from "../../context/LoginStateContext";
import { useContext } from "react";

function PartOfSignUpButton() {
  const LoginCtx = useContext(LoginStateContext);
  const MoveSignupHandler = () => {
    LoginCtx?.setLoginModalState("SignUp");
  };
  return (
    <Box>
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        onClick={MoveSignupHandler}
      >
        가입하기
      </Button>
    </Box>
  );
}

export default PartOfSignUpButton;
