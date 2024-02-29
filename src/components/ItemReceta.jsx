import { Button } from "react-bootstrap";

const ItemReceta = ({receta}) => {
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
        <Button variant="danger" className="ms-2">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
