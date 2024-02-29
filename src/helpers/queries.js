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
        console.log(respuesta);
        return respuesta;
        
    } catch (error) {
        console.log(error);
    }
}

// Función para leer las recetas - GET 
export async function leerRecetasAPI () {
    try {
        const respuesta = await fetch(URI_Receta);
        console.log(respuesta);
        return respuesta;
        
    } catch (error) {
        console.log(error)
    }
}