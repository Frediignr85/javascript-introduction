//Tipos de datos

//Undefined
let cliente;
console.log(cliente)
console.log(typeof cliente)

//Boolean
const activo = true;
console.log(activo);
console.log(typeof activo);

//Number
const edad = 25;
console.log(edad);
console.log(typeof edad);

//String
const nombre = 'Fredy Mauricio Benitez';
console.log(`Nombre: ${nombre}`);
console.log(typeof nombre);

//BigInt (No se pueden operar con cualquier tipo de otro dato numerico a menos que se haga una coercion)
const numeroGrande = BigInt(12313421241241231231);
const numeroPrueba = 12;
console.log(`Numero: ${numeroGrande}`);
console.log(typeof numeroGrande);
console.log(numeroPrueba + Number(numeroGrande));

//Symbol (son unicos)
const simbolo = Symbol(30);
const segundoSimbolo = Symbol(30);
console.log(simbolo == segundoSimbolo);
console.log(simbolo.valueOf());
console.log(segundoSimbolo.valueOf());
console.log(typeof simbolo);

//NULL
const descuento = null;
console.log(descuento);
console.log(typeof descuento);