const URI_Receta = import.meta.env.VITE_API_RECETA;

// console.log(URI_Receta);

// Funcion para agregar una receta - POST 
export async function crearReceta (recetaNueva) {
    try {
        const respuesta = await fetch(URI_Receta, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recetaNueva)
        });
        console.log(respuesta);
        return respuesta;
        
    } catch (error) {
        console.log(error);
    }
}