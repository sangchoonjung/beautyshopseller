import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoginAndSignUpInputValueType } from "../aboutSignUp/PartOfSignUpInput";

function PartOfLoginInput() {
  const [inputValue, setInputValue] = useState<LoginAndSignUpInputValueType>({
    id: "",
    password: "",
  });

  const onLoginHandler: React.FormEventHandler = (evt) => {
    evt.preventDefault();
  };
  console.log(inputValue);
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
