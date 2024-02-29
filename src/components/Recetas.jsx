import { Container, Row } from "react-bootstrap";
import CardReceta from "./CardReceta";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../helpers/queries";

const Recetas = () => {
  const [recetas,setRecetas] = useState([]);

  useEffect(()=>{
    obtenerRecetas();
  },[])
  
 async function obtenerRecetas () {
    const respuesta = await leerRecetasAPI();
  
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setRecetas(datos);

    } else {
      Swal.fire({
        title: "Ocurrio un error!",
        text: `Intente de nuevo en unos minutos.`,
        icon: "error"
      });
    }
  }


  return (
    <section className="bg-main-color">
      <Container className="my-4 ">
        <h2 className="fs-1"><span className="display-4 fw-semibold darkGolden-color">N</span>uestras recetas</h2>
        <hr className="darkGolden-color"/>
        <Row>
            {
              recetas.map((receta)=> <CardReceta key={receta.id} receta={receta} setRecetas={setRecetas}></CardReceta>)
            }
        </Row>
      </Container>
    </section>
  );
};

export default Recetas;
