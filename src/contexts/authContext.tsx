import { PropsWithChildren, createContext } from "react";
import { API } from "../configs/api";

export type SignInTypes = {
  email: string;
  password: string;
};

type AuthContextType = {
  signIn: (params: SignInTypes) => Promise<boolean | void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: PropsWithChildren) {
  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) throw alert("por favor informar email e senha");

    return API.post("/login", { email, password })
      .then((res) => {
        console.log({userID: res.data.id});
        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado no login!");
        }
        console.error(error);
      });
  }
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}
