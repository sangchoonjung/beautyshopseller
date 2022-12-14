import { Box, Button, TextField, Typography } from "@mui/material";
import { LoginStateContext } from "../../context/LoginStateContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function PartOfSignUpButton() {
  const LoginCtx = useContext(LoginStateContext);
  const navi = useNavigate();
  const MoveSignupHandler = () => {
    navi("/register");
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
