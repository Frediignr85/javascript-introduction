// Unir 2 objetos en uno solo
const producto = {
    nombre: "Table",
    precio: 300,
    disponible: true
};

const cliente = {
    nombre: "Juan",
    premium: true
};

//producto.cliente = cliente;

const nuevoObjeto = Object.assign(producto, cliente);
const nuevoObjeto2 = {
    ...producto,
    ...cliente
}
const nuevoProducto3 = {
    producto: {...producto},
    cliente: {...cliente}
};

//console.log(producto);
//console.log(nuevoObjeto);
//console.log(nuevoObjeto2);
console.log(nuevoProducto3);
console.log(cliente);
console.log(producto);