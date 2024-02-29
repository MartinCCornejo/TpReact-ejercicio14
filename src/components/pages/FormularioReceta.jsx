import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearRecetaAPI, modificarRecetaAPI, obtenerRecetaAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import { useEffect } from "react";

const FormularioReceta = ({titulo, subtitulo, editar}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const {id} = useParams();

  useEffect(()=> {
    if (editar) {
      cargarDatosReceta();
    }
  },[])

  async function cargarDatosReceta () {
    const respuesta = await obtenerRecetaAPI(id);

    if (respuesta.status === 200) {
      const recetaBuscada = await respuesta.json();
      setValue('nombreReceta',recetaBuscada.nombreReceta);
      setValue('imagenURL',recetaBuscada.imagenURL);
      setValue('descripcionBreve',recetaBuscada.descripcionBreve);
      setValue('descripcionDetallada',recetaBuscada.descripcionDetallada);
      setValue('categoria',recetaBuscada.categoria);
      setValue('dificultad',recetaBuscada.dificultad);
      setValue('ingredientes',recetaBuscada.ingredientes);
      setValue('preparacion',recetaBuscada.preparacion);
    }
  }
  

  const onSubmit = async (receta) => {
    if (editar) {
      // Aqui se edita una receta 
      const respuesta = await modificarRecetaAPI(producto,producto.id);

      if (respuesta.status === 200) {
        Swal.fire({
          title: "Receta modificada!",
          text: `La receta '${receta.nombreReceta}' se modifico correctamente.`,
          icon: "success"
        });

      } else {
        Swal.fire({
          title: "Ocurrio un error!",
          text: `La receta '${receta.nombreReceta}' no se pudo modificar correctamente, intente de nuevo en unos minutos.`,
          icon: "error"
        });
      }

    } else {
      const respuesta = await crearRecetaAPI(receta);

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta agregada!",
          text: `La receta '${receta.nombreReceta}' se agrego correctamente.`,
          icon: "success"
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error!",
          text: `La receta '${receta.nombreReceta}' no se pudo agregar, intente de nuevo en unos minutos.`,
          icon: "error"
        });
      }
    }
  };


  return (
    <section className="flex-grow-1 bg-main-color">
      <div className="image-title-container">
        <h1 className="title display-4">{titulo}</h1>
      </div>
      <Container className="my-4">
        <h2 className="fs-1">
          {subtitulo}
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
                  value: /^(http|https):\/\/\S+\.(jpeg|jpg|gif|png|bmp|webp)$/i,
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
                <option value="Plato principal">Plato principal</option>
                <option value="Postres y dulces">Postres y dulces</option>
                <option value="Vegetarianas o veganas">
                  Vegetarianas o veganas
                </option>
                <option value="guarniciones">Guarniciones</option>
                <option value="Panaderia y reposteria">
                  Panadería y repostería
                </option>
                <option value="Internacionales">Internacionales</option>
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
                <option value="Dificultad fácil">Fácil</option>
                <option value="Dificultad intermedio">Intermedio</option>
                <option value="Dificultad difícil">Difícil</option>
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
          <button className="btn-customized mt-2" type="submit">
            Guardar
          </button>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioReceta;
