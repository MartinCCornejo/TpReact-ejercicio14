import { Col, Card } from "react-bootstrap";
import { FaUtensils } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardReceta = () => {
  return (
    <Col lg={4} md={6} sm={6} className="mb-4">
      <Card className="h-100 text-center">
        <div className="card-img-container">
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="img-card-customized"
          />
        </div>
        <Card.Body className="p-0 d-flex flex-column justify-content-between">
          <Card.Header className="py-2 px-2 mb-2">
            <h3 className="fs-4 fw-semibold">Pan con espinaca y queso</h3>
            <div className="d-flex darkGolden-color justify-content-around">
              <span className="textPoppins fw-bold">Dificultad facil</span>
              <span className="textPoppins fw-bold">
                <FaUtensils className="me-1" />
                Merienda
              </span>
            </div>
          </Card.Header>
          <p className="text-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit..
          </p>
        </Card.Body>
        <Link to={"/detalle-de-receta"}>
          <button className="btn-customized btn-100">Ver más</button>
        </Link>
      </Card>
    </Col>
  );
};

export default CardReceta;
