import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="md" className="bg-darkGolden py-3">
      <Container>
        <Navbar.Brand className="logo" as={Link} to="/"><i className="bi bi-egg-fried me-2"></i>DeliciasVirtuales</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto textPoppins text-success">
            <NavLink end to="/" className="nav-link">Inicio</NavLink>
            <NavLink end to="/administrador" className=" nav-link">Administrador</NavLink>
            <NavLink to="/iniciar-sesion" className=" nav-link">Iniciar Sesión</NavLink>
            <NavLink to="/registrarse" className=" nav-link">Registrarse</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
