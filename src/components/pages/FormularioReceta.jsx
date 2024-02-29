import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearRecetaAPI } from "../../helpers/queries";

const FormularioReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (producto) => {
    console.log(producto);
    const respuesta = await crearRecetaAPI(producto);
    console.log(respuesta);
  };


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
        <Form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombreReceta">
            <Form.Label>Nombre de la receta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre de la receta"
              {...register("nombreReceta", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debe ingresar como mínimo 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como máximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagenURL">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la url de la imagen"
              {...register("imagenURL", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^(http|https):\/\/\S+\.(jpeg|jpg|gif|png|bmp)$/i,
                  message: "Ingrese una URL válida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagenURL?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcionBreve">
            <Form.Label>Descripción breve</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una descripción breve de la receta"
              {...register("descripcionBreve", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 10,
                  message: "Debe ingresar como mínimo 10 caracteres",
                },
                maxLength: {
                  value: 80,
                  message: "Debe ingresar como máximo 80 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcionBreve?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcionDetallada">
            <Form.Label>Descripción detallada</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una descripción ampliada de la receta"
              {...register("descripcionDetallada", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 50,
                  message: "Debe ingresar como mínimo 50 caracteres",
                },
                maxLength: {
                  value: 800,
                  message: "Debe ingresar como máximo 800 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcionDetallada?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="formDificultadYCategoria">
            <div className="col-md-6 mb-3 mb-md-0">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                aria-label="categoria"
                {...register("categoria", {
                  required: "Seleccione una categoría",
                })}
              >
                <option value="">Seleccione la categoría</option>
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
              <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
            </div>
            <div className="col-md-6">
              <Form.Label>Dificultad</Form.Label>
              <Form.Select
                aria-label="dificultad"
                {...register("dificultad", {
                  required: "Seleccione una dificultad",
                })}
              >
                <option value="">Seleccione la dificultad</option>
                <option value="facil">Fácil</option>
                <option value="intermedio">Intermedio</option>
                <option value="dificil">Difícil</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.dificultad?.message}
              </Form.Text>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formIngredientes">
            <Form.Label>Ingredientes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese los ingredientes de la receta"
              {...register("ingredientes", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 20,
                  message: "Debe ingresar como mínimo 20 caracteres",
                },
                maxLength: {
                  value: 900,
                  message: "Debe ingresar como máximo 900 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
                {errors.ingredientes?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPreparacion">
            <Form.Label>Preparación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la preparación de la receta"
              {...register("preparacion", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 50,
                  message: "Debe ingresar como mínimo 50 caracteres",
                },
                maxLength: {
                  value: 5000,
                  message: "Debe ingresar como máximo 5000 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
                {errors.preparacion?.message}
            </Form.Text>
          </Form.Group>
          <button className="btn-customized mt-2 fs-5" type="submit">
            Guardar
          </button>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioReceta;
