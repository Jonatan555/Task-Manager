import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { MenuItem } from "../MenuItem";
import { useAuth } from "../../hooks/useAuth";

type SideBarTypes = {
  toggleSidebar?: () => void;
};

    const {signout} = useAuth();
    const navigate = useNavigate();
  
    function logoutApp() {
      const resp = confirm("Deseja sair da aplicação?");
  
      if (resp) {
        signout();
        navigate("/")
      }
    }
  return (
    <Container onClick={toggleSidebar}>
      <div className="asideMenu" onClick={toggleSidebar}> 
        <i className="closeIcon" onClick={toggleSidebar}>
          close
        </i>

        <nav>
          <ul>
            <NavLink to={"/"}  onClick={toggleSidebar}>
              <MenuItem title="Home" icon="Home" />
            </NavLink>

            <NavLink to={"/tasks"} onClick={toggleSidebar}>
              <MenuItem title="Tarefa" icon="task" />
            </NavLink>

            <NavLink to={"/create tasks"}  onClick={toggleSidebar}>
              <MenuItem title="Adicionar" icon="add_circle" />
            </NavLink>

            <NavLink to={"/about"}  onClick={toggleSidebar}>
              <MenuItem title="Sobre" icon="info" />
            </NavLink>

            <div onClick={() => {}}>
              <MenuItem title="Sair" icon="exit_to_app" />
            </div>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
