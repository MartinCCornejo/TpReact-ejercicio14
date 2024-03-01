import { Col, Card } from "react-bootstrap";
import { FaUtensils } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardReceta = ({receta}) => {
  return (
    <Col lg={4} md={6} sm={6} className="mb-5">
      <Card className="h-100 text-center card-customized">
        <div className="card-img-container">
          <Card.Img
            variant="top"
            src={receta.imagenURL}
            className="img-card-customized"
          />
        </div>
        <Card.Body className="p-0 ">
          <Card.Header className="py-2 px-2 mb-2">
            <h3 className="fs-4 fw-semibold">{receta.nombreReceta}</h3>
            <div className="d-flex darkGolden-color justify-content-around">
              <span className="textPoppins fw-bold">Dif. {receta.dificultad}</span>
              <span className="textPoppins fw-bold">
                <FaUtensils className="me-1" />
                {receta.categoria}
              </span>
            </div>
          </Card.Header>
          <p className="text-gray px-2">
            {receta.descripcionBreve}
          </p>
        </Card.Body>
        <Link to={"/detalle-de-receta/"+receta.id}>
          <button className="btn-customized btn-100">Ver más</button>
        </Link>
      </Card>
    </Col>
  );
};

export default CardReceta;
