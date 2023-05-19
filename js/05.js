// Objetos manipulacion


const nombre = "Table";
const precio = 300;
const disponible = true;

// Creando un objeto con el mismo nombre de la llave
const producto = {
    nombre,
    precio,
    disponible
};

console.log(producto);

// Con esta propiedad se bloquean las acciones de reasignacion de valores,
// agregacion de nuevas propiedades o eliminacion de propiedades
//Object.freeze(producto);

// Esta propiedad sirve para si poder reasignar valores a las propiedades
// del objeto, pero no para agregar nuevas propiedades o eliminar las ya existentes
//Object.seal(producto);

//Reasignacion de valores del objeto
producto.nombre = 'Tablet actualizado';
console.log(producto);

// Agregar propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);

// Eliminar propiedades
delete producto.imagen;
console.log(producto);

