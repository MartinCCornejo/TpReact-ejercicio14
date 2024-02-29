import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Menu = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActiveNavbar(true);
      } else {
        setActiveNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="md" className={`navbar-customized ${activeNavbar ? 'activeNavbar' : ''}`}>
      <Container>
        <Navbar.Brand className="logo" as={Link} to="/"><i className="bi bi-egg-fried me-2 text-warning d-none d-sm-inline-block"></i>DeliciasVirtuales</Navbar.Brand>
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
