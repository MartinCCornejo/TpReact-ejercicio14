import { Container, Table, Button } from "react-bootstrap";
import ItemReceta from "../ItemReceta";
import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <section className="bg-main-color flex-grow-1">
    <Container className="my-5 ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>
          <span className="darkGolden-color display-4 fw-semibold">P</span>
          roductos disponibles
        </h1>
        <div>
          <Link to='/administrador/agregar-receta'>
          <Button variant="primary">
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
          </Link>
          
        </div>
      </div>
      <Table striped bordered hover responsive>
        <thead className="text-center text-uppercase">
          <tr>
            <th>Cod</th>
            <th>Receta</th>
            <th>URL de la imagen</th>
            <th>Categoría</th>
            <th>Dificultad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </Container>
    </section>
  );
};

export default Administrador;
