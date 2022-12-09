import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoginAndSignUpInputValueType } from "../aboutSignUp/PartOfSignUpInput";

function PartOfLoginInput() {
  const [inputValue, setInputValue] = useState<LoginAndSignUpInputValueType>({
    email: "",
    password: "",
  });

  console.log(inputValue);
  const onLoginHandler: React.FormEventHandler = async (evt) => {
    evt.preventDefault();
    const response = await fetch("http://localhost:8080/api/account/login", {
      method: "POST",
      body: JSON.stringify({
        email: inputValue.email,
        passWord: inputValue.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <Box>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onLoginHandler}
      >
        <TextField
          id="filled-basic"
          label="ID"
          variant="filled"
          type={"text"}
          onChange={(evt) =>
            setInputValue((current) => {
              return { ...current, email: evt.target.value };
            })
          }
          value={inputValue.email}
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
          value={inputValue.password}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Box>
  );
}

export default PartOfLoginInput;
