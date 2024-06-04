import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app.routes ";
import { AuthRouter } from "./auth.routes";
import { useAuth } from "../hooks/useAuth";

export function AppRoutes() {
  const { authuserID } = useAuth();
  const isAuth = !!authuserID; //conversion
  const routes = isAuth ? <AppRouter /> : <AuthRouter />;
  //type cohecion
  return <BrowserRouter>{routes}</BrowserRouter>;
}
