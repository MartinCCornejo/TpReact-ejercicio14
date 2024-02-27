import { Container, Row } from "react-bootstrap";
import CardReceta from "./CardReceta";

const Recetas = () => {
  return (
    <section className="bg-main-color">
      <Container className="my-4 ">
        <h2 className="fs-1"><span className="display-5 fw-semibold darkGolden-color">N</span>uestras recetas</h2>
        <Row>
            <CardReceta></CardReceta>
        </Row>
      </Container>
    </section>
  );
};

export default Recetas;
