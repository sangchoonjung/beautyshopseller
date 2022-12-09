import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoginAndSignUpInputValueType } from "../aboutSignUp/PartOfSignUpInput";

function PartOfLoginInput() {
  const [inputValue, setInputValue] = useState<LoginAndSignUpInputValueType>({
    email: "",
    password: "",
  });

  const onLoginHandler: React.FormEventHandler = async (evt) => {
    evt.preventDefault();
    const response = await fetch("http://localhost:3306", {
      method: "POST",
      body: JSON.stringify({
        id: inputValue.email,
        password: inputValue.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
  };
  console.log(inputValue);
  return (
    <Box>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        // onSubmit={onLoginHandler}
      >
        <TextField
          id="filled-basic"
          label="ID"
          variant="filled"
          type={"text"}
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
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Box>
  );
}

export default PartOfLoginInput;
