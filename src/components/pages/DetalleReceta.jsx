import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUtensils } from "react-icons/fa6";
import { useParams } from "react-router";
import { obtenerRecetaAPI } from "../../helpers/queries";

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState({});

  useEffect(() => {
    cargarDatosReceta();
  }, []);

  const cargarDatosReceta = async () => {
    const respuesta = await obtenerRecetaAPI(id);
    const datos = await respuesta.json();
    setReceta(datos);
  };

  return (
    <section className="flex-grow-1 bg-main-color mt-5">
      <Container className="my-4 mt-5">
        <h1 className="fs-1">
          <span className="display-4 fw-semibold darkGolden-color">D</span>
          etalle de la receta
        </h1>
        <hr className="mt-0" />
        <Row className="justify-content-center align-items-center mt-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src={receta.imagenURL}
              alt="Imagen de la receta"
              className="img-detalle"
            />
          </Col>
          <Col lg={6} className="text-center text-lg-start">
            <h2 className="fw-semibold text-uppercase fs-1">
              {receta.nombreReceta}
            </h2>
            <div className="row justify-content-center align-items-center">
              <span className="col-md-6 textPoppins fw-bold darkGolden-color fs-5">
                Dificultad {receta.dificultad}
              </span>
              <span className="col-md-6 textPoppins fw-bold darkGolden-color fs-5">
                <FaUtensils className="me-1" />
                {receta.categoria}
              </span>
            </div>
            <hr className="mt-2 mb-3" />
            <p className="text-gray text-start">
              {receta.descripcionDetallada}
            </p>
          </Col>
        </Row>
        <div className="my-4">
          <h3 className="fs-2">
            <span className="display-4 fw-semibold darkGolden-color">I</span>
            ngredientes
          </h3>
          <hr className="mt-0" />
          <p className="text-gray">{receta.ingredientes}</p>
        </div>
        <div className="mt-4 mb-5">
          <h3 className="fs-2">
            <span className="display-4 fw-semibold darkGolden-color">P</span>
            reparación
          </h3>
          <hr className="mt-0" />
          <p className="text-gray">{receta.preparacion}</p>
        </div>
      </Container>
    </section>
  );
};

export default DetalleReceta;
