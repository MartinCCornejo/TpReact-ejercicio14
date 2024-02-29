const URI_Receta = import.meta.env.VITE_API_RECETA;

// console.log(URI_Receta);

// Funcion para agregar una receta - POST 
export async function crearRecetaAPI (recetaNueva) {
    try {
        const respuesta = await fetch(URI_Receta, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recetaNueva)
        });
        return respuesta;
        
    } catch (error) {
        console.log(error);
    }
}

// Función para leer las recetas - GET 
export async function leerRecetasAPI () {
    try {
        const respuesta = await fetch(URI_Receta);
        return respuesta;
        
    } catch (error) {
        console.log(error)
    }
}

// Función para eliminar una receta - DELETE 
export async function borrarRecetaAPI(id) {
    try {
        const respuesta = await fetch(`${URI_Receta}/${id}`, {
            method: "DELETE"
        });
        return respuesta;

    } catch (error) {
        console.log(error);
    }
}

// GET de una receta
export async function obtenerRecetaAPI(id) {
    try {
      const respuesta = await fetch(`${URI_Receta}/${id}`);
      return respuesta;

    } catch (error) {
      console.log(error);
    }
}

// Función para editar una receta - PUT 
export async function modificarRecetaAPI (receta,id) {
    try {
      const respuesta = await fetch(`${URI_Receta}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto)
      });
      return respuesta;

    } catch (error) {
      console.log(error);
    }
  }