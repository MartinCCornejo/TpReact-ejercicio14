import { Col, Card, Button } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col lg={3} md={4} sm={6} className="mb-4">
      <Card className="h-100">
        <div className="card-img-container">
          <Card.Img
            variant="top"
            src=""
            className="img-card-customized"
          />
        </div>
        <Card.Body className="pb-0 d-flex flex-column justify-content-between">
          <h3 className="main-color fs-5 fw-semibold">
            Producto
          </h3>
          <p>Descripcion breve</p>
          <h3 className="fw-bold fs-3"></h3>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <Button variant="dark" className="text-montserrat fw-semibold">
            Ver más
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardReceta;
