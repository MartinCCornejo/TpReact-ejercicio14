import { Container, Row, Col } from "react-bootstrap";
import { FaUtensils } from "react-icons/fa6";

const DetalleReceta = () => {
  return (
    <section className="flex-grow-1 bg-main-color">
      <Container className="my-4">
        <h1 className="fs-1">
          <span className="display-4 fw-semibold darkGolden-color">D</span>
          etalle de la receta
        </h1>
        <hr className="mt-0"/>
        <Row className="justify-content-center align-items-center mt-4">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen del producto"
              className="img-detalle"
            />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-semibold text-uppercase fs-1">
              Pan con espinaca y queso
            </h2>
            <span className="textPoppins fw-bold darkGolden-color fs-5 me-4">
              Dificultad facil
            </span>
            <span className="textPoppins fw-bold darkGolden-color fs-5">
              <FaUtensils className="me-1" />
              Merienda
            </span>
            <hr className="mt-2 mb-3" />
            <p className="text-gray text-start">
              El café americano es una bebida caliente que consiste en un
              espresso diluido con agua caliente, lo que resulta en una taza de
              café suave y aromático. Es una opción popular para aquellos que
              prefieren un café menos intenso que el espresso tradicional.
              Perfecto para disfrutar en cualquier momento del día.
            </p>
          </Col>
        </Row>
        <div className="my-4">
          <h3 className="fs-2">
            <span className="display-4 fw-semibold darkGolden-color">I</span>
            ngredientes
          </h3>
          <hr className="mt-0"/>
          <p className="text-gray">
            300g de espinacas frescas, lavadas y picadas 200g de queso (puede
            ser queso rallado, como cheddar, mozzarella, o cualquier otro queso
            de tu elección) 500g de harina de trigo 10g de levadura seca o 25g
            de levadura fresca 250ml de agua tibia 2 cucharadas de aceite de
            oliva 1 cucharadita de sal Opcional: hierbas frescas picadas (como
            albahaca o perejil) para dar más sabor
          </p>
        </div>
        <div className="mt-4 mb-5">
          <h3 className="fs-2">
            <span className="display-4 fw-semibold darkGolden-color">P</span>
            reparación
          </h3>
          <hr className="mt-0"/>
          <p className="text-gray">
            En un bol grande, disuelve la levadura en el agua tibia. Deja
            reposar durante unos minutos hasta que empiece a burbujear. Agrega
            la harina y la sal al bol con la levadura disuelta. Mezcla bien
            hasta formar una masa. Agrega las espinacas picadas y el queso a la
            masa. También puedes añadir las hierbas frescas si decides usarlas.
            Amasa la masa hasta que todos los ingredientes estén bien
            distribuidos y la masa esté suave y elástica. Vierte el aceite de
            oliva sobre la masa y amasa un poco más para incorporarlo. Cubre el
            bol con un paño limpio y deja reposar la masa en un lugar cálido
            durante aproximadamente una hora, o hasta que haya duplicado su
            tamaño. Precalienta el horno a 200°C. Una vez que la masa haya
            levado, divídela en porciones del tamaño deseado y dale forma de
            panes individuales o colócala en un molde para pan. Deja que los
            panes reposen nuevamente durante unos 20-30 minutos. Hornea los
            panes en el horno precalentado durante 25-30 minutos, o hasta que
            estén dorados y suenen huecos al golpear la base. Deja enfriar los
            panes antes de cortar y servir. Disfruta de tu delicioso pan con
            espinacas y queso.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default DetalleReceta;
