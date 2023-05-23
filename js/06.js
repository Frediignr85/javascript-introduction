// Objetos - Destructuring con 2 o mas objetos

const producto = {
    nombre: "Table",
    precio: 300,
    disponible: true
};

const cliente = {
    nombre: "Juan",
    premium: true
};

const { nombre, precio, disponible } = producto;

const { nombre: nombreCliente, premium } = cliente;

console.log(nombre, precio, disponible);
console.log(nombreCliente, premium);