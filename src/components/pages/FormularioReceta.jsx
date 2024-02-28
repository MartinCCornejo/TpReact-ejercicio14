import { Container, Form } from "react-bootstrap";

const FormularioReceta = () => {
  return (
    <section className="flex-grow-1 bg-main-color">
      <div className="image-title-container">
        <h1 className="title display-4">Agregar Receta</h1>
      </div>
      <Container className="my-4">
        <h2 className="fs-1">
          <span className="display-4 fw-semibold darkGolden-color">N</span>ueva
          receta
        </h2>
        <hr />
        <Form className="mb-5">
          <Form.Group className="mb-3" controlId="formNombreReceta">
            <Form.Label>Nombre de la receta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre de la receta"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagenURL">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la url de la imagen"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcionBreve">
            <Form.Label>Descripción breve</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una descripción breve de la receta"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcionDetallada">
            <Form.Label>Descripción detallada</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una descripción ampliada de la receta"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoría</Form.Label>
            <Form.Select aria-label="categoria">
              <option>Seleccione la categoría</option>
              <option value="platoPrincipal">Plato principal</option>
              <option value="postresYDulces">Postres y dulces</option>
              <option value="vegetarianasOVeganas">
                Vegetarianas o veganas
              </option>
              <option value="guarniciones">Guarniciones</option>
              <option value="panaderiaYReposteria">
                Panadería y repostería
              </option>
              <option value="internacionales">Internacionales</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDificultad">
            <Form.Label>Dificultad</Form.Label>
            <Form.Select aria-label="dificultad">
              <option>Seleccione la dificultad</option>
              <option value="facil">Fácil</option>
              <option value="intermedio">Intermedio</option>
              <option value="dificil">Difícil</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formIngredientes">
            <Form.Label>Ingredientes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese los ingredientes de la receta"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPreparacion">
            <Form.Label>Preparación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la preparación de la receta"
            />
          </Form.Group>
          <button className="btn-customized mt-2 fs-5" type="submit">Guardar</button>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioReceta;
