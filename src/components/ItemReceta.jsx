import { Button } from "react-bootstrap";
import { borrarRecetaAPI, leerRecetasAPI } from "../helpers/queries";
import Swal from "sweetalert2";

const ItemReceta = ({receta, setRecetas}) => {

  const borrarReceta = () => {
    Swal.fire({
      title: "Estas seguro de borrar esta receta?",
      text: "No podras revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaAPI(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta '${receta.nombreReceta}' fue eliminada correctamente`,
            icon: "success",
          });
          if (respuesta.status === 200) {
            const respuesta = await leerRecetasAPI();
            const datos = await respuesta.json();
            setRecetas(datos);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `La receta '${receta.nombreReceta}' NO fue eliminada, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center overflow-hidden text-truncate">{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="text-center overflow-hidden text-truncate">
        <img
          src={receta.imagenURL}
          width={110}
          alt="Imagen de la receta"
        />
      </td>
      <td className="text-center overflow-hidden text-truncate">{receta.categoria}</td>
      <td className="text-center overflow-hidden text-truncate">{receta.dificultad}</td>
      <td className="text-center overflow-hidden text-truncate">
        <Button className="btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="ms-2" onClick={borrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
