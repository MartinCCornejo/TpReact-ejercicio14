import { Container, Row, Col } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <section className="flex-grow-1 bg-main-color">
      <Container className="my-4">
        <h1 className="fs-1">
          <span className="display-4 fw-semibold darkGolden-color">D</span>
          etalle de la receta
        </h1>
        <hr/>
        <Row className="justify-content-center align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagen del producto"
            className="img-detalle"
          />
        </Col>
        <Col md={6}>
          <h2 className="darkGolden-color fw-semibold text-uppercase">Pan con espinaca y queso</h2>
          <hr />
          <p>
            El café americano es una bebida caliente que consiste en un espresso
            diluido con agua caliente, lo que resulta en una taza de café suave
            y aromático. Es una opción popular para aquellos que prefieren un
            café menos intenso que el espresso tradicional. Perfecto para
            disfrutar en cualquier momento del día.
          </p>
          <span></span>
          <span></span>
        </Col>
      </Row>
      </Container>
    </section>
  );
};

export default DetalleReceta;
