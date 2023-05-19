// Objetos

const nombre = "Table";
const precio = 300;
const disponible = true;

// Creando un objeto con el mismo nombre de la llave
const producto = {
    nombre,
    precio,
    disponible
};
// Cambiando el nombre de la llave
const segundoProducto = {
    'nombreProducto': nombre,
    'precioProducto': precio,
    'disponibilidadProducto': disponible
};


console.log(producto);
console.log(segundoProducto);

//Accediendo a las propiedades del objeto producto
console.log(`Nombre del producto: ${producto.nombre}`);
console.log(`Precio del producto: ${producto.precio}`);
console.log(`Disponibilidad del producto: ${producto.disponible}`);

//Destructuring 
const { nombreDes, precioDes, disponibilidadDes } = producto;
console.log(nombreDes);
console.log(precioDes);
console.log(disponibilidadDes);

// Object Literal Enhacement
const autenticado = true;
const usuario = 'Fredy';
const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario,
};
console.table(nuevoObjeto);