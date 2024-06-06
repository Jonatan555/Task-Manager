import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logo-rj.png";
import { Sidebar } from "../Sidebar";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const [showSidebar, setshowSidebar] = useState(false);
  const {signout} = useAuth();
  const navigate = useNavigate();

  function logoutApp() {
    const resp = confirm("Deseja sair da aplicação?");

    if (resp) {
      signout();
      navigate("/")
    }
  }

  function toggleSidebar() {
    setshowSidebar((prevstate) => (prevstate == true ? false : true));
  }
  return (
    <Container>
      <div className="asideMenu"></div>
      <i className="closeIcon material-Icons"   onClick={toggleSidebar}>close</i>

      <div className="appLogo">
        <h1>Task Manager</h1>
        <Link to="">
          <img src={logo} alt="" />
        </Link>
      </div>

      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
    </Container>
  );
}
