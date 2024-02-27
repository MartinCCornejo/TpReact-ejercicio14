import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col lg={7} className="">
            <h1 className="fw-bold text-light display-3">
              Bienvenidos a Delicias Virtuales
            </h1>
            <p className="text-banner fs-5">
              Explora un universo culinario repleto de deliciosas recetas,
              inspiración para cada ocasión y secretos gastronómicos que te
              llevarán en un viaje sensorial único. ¡Bienvenido a nuestra
              comunidad de amantes de la cocina!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
