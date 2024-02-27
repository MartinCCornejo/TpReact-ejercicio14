import { Button } from "react-bootstrap";

const ItemReceta = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Tostada con espinaca</td>
      <td className="text-center">
        <img
          src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={120}
          alt="Imagen de la receta"
        />
      </td>
      <td className="text-center">Merienda</td>
      <td className="text-center">Dificultad facil</td>
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
