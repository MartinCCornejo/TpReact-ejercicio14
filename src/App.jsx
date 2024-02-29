import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/common/Footer";
import Administrador from "./components/pages/Administrador";
import FormularioReceta from "./components/pages/FormularioReceta";
import DetalleReceta from "./components/pages/DetalleReceta";
import Error404 from "./components/pages/Error404";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/agregar-receta" element={<FormularioReceta editar={false} titulo={'Agregar receta'} subtitulo={'Nueva receta'}></FormularioReceta>}></Route>
        <Route exact path="/administrador/editar-receta/:id" element={<FormularioReceta editar={true} titulo={'Editar receta'} subtitulo={'Verifique los datos'}></FormularioReceta>}></Route>
        <Route exact path="/detalle-de-receta" element={<DetalleReceta></DetalleReceta>}></Route> 
        <Route path="*" element={<Error404></Error404>}></Route> 
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
