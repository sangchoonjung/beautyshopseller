import { Box, Typography } from "@mui/material";
import PartOfFindIdAndPass from "../aboutLogin/PartOfFindIdAndPass";
import PartOfLoginInput from "../aboutLogin/PartOfLoginInput";
import PartOfSignUpButton from "../aboutSignUp/PartOfSignUpButton";
function LoginContainer() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        // position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "200px", height: "200px", mb: 3 }}>
        <img src="/images/BeautyShopLogo.png" width={"100%"} height={"100%"} />
      </Box>

      <Box
        sx={{
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <PartOfLoginInput />
        <br />
        <PartOfSignUpButton />
      </Box>
    </Box>
  );
}

export default LoginContainer;
