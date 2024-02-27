import { Navbar, Container, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar expand="md" className="bg-mainColor py-3">
      <Container>
        <Navbar.Brand className="logo"><i className="bi bi-egg-fried me-2"></i>DeliciasVirtuales</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto textPoppins">
            <Nav.Link className="text-light">Administrador</Nav.Link>
            <Nav.Link className="text-light">Iniciar Sesión</Nav.Link>
            <Nav.Link className="text-light">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
