import React, { createContext } from "react";
import { useLocalStorage } from "react-use";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [state, setState] = useLocalStorage("auth", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [role, setRole] = useLocalStorage("role", null);


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state?.data?.token ? true : false,
        token,
        setToken,
        user: state?.data?.userDetails[0],
        setState,
        role,setRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
