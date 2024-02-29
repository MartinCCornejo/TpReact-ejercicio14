import { Button } from "react-bootstrap";

const ItemReceta = ({receta}) => {
  return (
    <tr>
      <td className="text-center">{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="text-center">
        <img
          src={receta.imagenURL}
          width={110}
          alt="Imagen de la receta"
        />
      </td>
      <td className="text-center">{receta.categoria}</td>
      <td className="text-center">{receta.dificultad}</td>
      <td className="text-center">
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
