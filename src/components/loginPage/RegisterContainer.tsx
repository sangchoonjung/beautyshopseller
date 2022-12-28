import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../../context/LoginStateContext";
import SERVER_IP from "../../util/serverIP";

export type LoginAndSignUpInputValueType = {
  email: string;
  password: string;
  passwordConfirm?: string;
  phoneNumber?: string;
  birth?: string;
  nickName?: string;
};

function RegisterContainer() {
  const navi = useNavigate();

  const [inputValue, setInputValue] = useState<LoginAndSignUpInputValueType>({
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
    birth: "",
    nickName: "",
  });
  const [invalidId, setInvalidId] = useState<boolean>(false);

  console.log(inputValue);

  const signUpSubmitHandler: React.FormEventHandler = async (evt) => {
    evt.preventDefault();
    if (inputValue.password === inputValue.passwordConfirm) {
      const response = await fetch(SERVER_IP + "/api/account/SellerRegister", {
        method: "POST",
        body: JSON.stringify(inputValue),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.result) {
        alert("가입에 성공 하였습니다.");
        navi("/login");
      } else {
        alert("이메일 중복 에러입니다.");
      }
    } else {
      alert("비밀번호가 틀립니다.");
    }
  };

  const checkEmail: React.MouseEventHandler = async (evt) => {
    evt.preventDefault();
    const response = await fetch(SERVER_IP + "/api/account/SellerIdCheck", {
      method: "POST",
      body: JSON.stringify({
        email: inputValue.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (data.result) {
      alert("사용가능한 아이디입니다.");
      setInvalidId(true);
    } else {
      alert("중복된 아이디입니다.");
    }
  };

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
      <Box
        sx={{
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={signUpSubmitHandler}
        >
          {/* 아이디(이메일),비번,비번확인,휴대폰번호,생년월일, */}
          <TextField
            id="filled-basic"
            label="E-mail"
            variant="filled"
            type={"email"}
            onChange={(evt) =>
              setInputValue((current) => {
                return { ...current, email: evt.target.value };
              })
            }
            value={inputValue.email}
          />
          <Button onClick={checkEmail}>중복확인</Button>
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
            value={inputValue.passwordConfirm}
          />
          <TextField
            id="filled-basic"
            label="nickname"
            variant="filled"
            type={"text"}
            onChange={(evt) =>
              setInputValue((current) => {
                return { ...current, nickName: evt.target.value };
              })
            }
            value={inputValue.nickName}
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
            value={inputValue.phoneNumber}
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
            value={inputValue.birth}
          />
          <Button type="submit" variant="contained" disabled={!invalidId}>
            가입완료하기
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default RegisterContainer;
