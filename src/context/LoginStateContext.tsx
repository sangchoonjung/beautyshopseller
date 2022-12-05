import { createContext, ReactNode, useState } from "react";

type Log = {
  LoginModalState: string;
  setLoginModalState: Function;
};
export const LoginStateContext = createContext<Log | null>(null);

const LoginStateContextProvider = ({ children }: { children: ReactNode }) => {
  //   Login , SignUp,
  const [LoginModalState, setLoginModalState] = useState("Login");

  return (
    <LoginStateContext.Provider value={{ LoginModalState, setLoginModalState }}>
      {children}
    </LoginStateContext.Provider>
  );
};
export default LoginStateContextProvider;
