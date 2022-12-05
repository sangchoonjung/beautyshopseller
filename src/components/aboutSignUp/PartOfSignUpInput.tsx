import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { LoginStateContext } from "../../context/LoginStateContext";

export type LoginAndSignUpInputValueType = {
  id: string;
  password: string;
  passwordConfirm?: string;
  phoneNumber?: string;
  birth?: string;
};
function PartOfSignUpInput() {
  const LoginCtx = useContext(LoginStateContext);
  const [inputValue, setInputValue] = useState<LoginAndSignUpInputValueType>({
    id: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
    birth: "",
  });
  console.log(inputValue);

  const signUpSubmitHandler: React.FormEventHandler = (evt) => {
    evt.preventDefault();
    LoginCtx?.setLoginModalState("Login");
  };

  return (
    <Box>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={signUpSubmitHandler}
      >
        {/* 아이디(이메일),비번,비번확인,휴대폰번호,생년월일, */}
        <TextField
          id="filled-basic"
          label="ID"
          variant="filled"
          type={"email"}
          onChange={(evt) =>
            setInputValue((current) => {
              return { ...current, id: evt.target.value };
            })
          }
        />
        <TextField
          id="filled-basic"
          label="PassWord"
          variant="filled"
          type={"password"}
          onChange={(evt) =>
            setInputValue((current) => {
              return { ...current, password: evt.target.value };
            })
          }
        />
        <TextField
          id="filled-basic"
          label="PassWordConfirm"
          variant="filled"
          type={"password"}
          onChange={(evt) =>
            setInputValue((current) => {
              return { ...current, passwordConfirm: evt.target.value };
            })
          }
        />
        <TextField
          id="filled-basic"
          label="PhoneNumber"
          variant="filled"
          type={"text"}
          onChange={(evt) =>
            setInputValue((current) => {
              return { ...current, phoneNumber: evt.target.value };
            })
          }
          inputProps={{
            maxLength: 11,
          }}
        />
        <TextField
          id="filled-basic"
          label="Birth"
          variant="filled"
          type={"date"}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(evt) =>
            setInputValue((current) => {
              return { ...current, birth: evt.target.value };
            })
          }
          defaultValue="1990-01-01"
        />
        <Button type="submit" variant="contained">
          가입완료하기
        </Button>
      </form>
    </Box>
  );
}

export default PartOfSignUpInput;
