# Blog de Recetas de Cocina

Este proyecto es una aplicación web desarrollada con React que permite a los usuarios explorar un blog de recetas de cocina. La aplicación cuenta con las siguientes funcionalidades:

* Visualización de recetas de cocina en una página principal.
* Capacidad para agregar nuevas recetas.
* Opción para modificar o eliminar recetas existentes.

Las recetas pueden ser almacenadas en un servidor JSON mediante `json-server`.

## Instalación
1. Clona este repositorio en tu máquina local usando el siguiente comando:
    ```bash
   git clone https://github.com/MartinCCornejo/TpReact-ejercicio14.git
2. Navega al directorio del proyecto:
   ```bash
    cd 14-BlogDeRecetas
3. Instala las dependencias necesarias: 
   ```bash
    npm install
## Uso

Asegúrate de tener json-server instalado globalmente. Si no lo tienes, puedes instalarlo ejecutando:
1. ```bash
    npm install json-server
3. Luego escribe el siguiente comando para inciar `json-server`: 
   ```bash
    npx json-server db.json
4. Ejecuta la aplicación en modo desarrollo: 
   ```bash
    npm run dev