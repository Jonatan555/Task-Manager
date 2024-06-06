import { Route, Routes } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { About } from "../pages/About";
import { Createtasks } from "../pages/Createtasks";
import { Tasks } from "../pages/tasks";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/create tasks" element={<Createtasks />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
