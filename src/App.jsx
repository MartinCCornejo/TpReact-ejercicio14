import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/common/Footer";
import Administrador from "./components/pages/Administrador";
import FormularioReceta from "./components/pages/FormularioReceta";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/agregar-producto" element={<FormularioReceta></FormularioReceta>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
