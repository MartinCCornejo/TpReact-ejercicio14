import { Container, Row } from "react-bootstrap";
import CardReceta from "./CardReceta";

const Recetas = () => {
  return (
    <section className="bg-main-color">
      <Container className="my-4 ">
        <h2 className="fs-1"><span className="display-4 fw-semibold darkGolden-color">N</span>uestras recetas</h2>
        <hr className="darkGolden-color"/>
        <Row>
            <CardReceta></CardReceta>
        </Row>
      </Container>
    </section>
  );
};

export default Recetas;
