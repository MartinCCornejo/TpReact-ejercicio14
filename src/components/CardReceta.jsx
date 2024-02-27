import { Col, Card } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col lg={4} md={6} sm={6} className="mb-4">
      <Card className="h-100">
        <div className="card-img-container">
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="img-card-customized"
          />
        </div>
        <Card.Body className="pb-0 d-flex flex-column justify-content-between">
          <h3 className="fs-5 fw-semibold">Pan con espinaca y queso</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
          <h3 className="fw-bold fs-3"></h3>
        </Card.Body>
        <Card.Footer className="text-center">
          <button className="btn-customized">Ver más</button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardReceta;
