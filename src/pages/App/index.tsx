import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <Container>
      <Header />

      <article>
        <section className="sidebar">
          <Sidebar />
        </section>

        <Outlet /> {/* main*/}
      </article>

      <Footer/>
    </Container>
  );
}
