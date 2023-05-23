// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js'];

//Agregar elementos al array
tecnologias.push('GraphQL'); // Agrega elementos al final del array
tecnologias.unshift('MongoDB'); // Agrega elementos al inicio del array;

const nuevoArreglo = ['VueJS',...tecnologias, 'NestJS']; // Recomendado

// Eliminar elementos del array
tecnologias.pop(); // Eliminar del final
tecnologias.shift(); // Eliminar del inicio
tecnologias.splice(2,1); // A partir del elemento 2 eliminar 1, si se quita el segundo parametro elimina todo

const nuevoArray = tecnologias.filter((element) => {
    return element !== 'HTML';
}); // Recomendado

// Reemplazar elementos del array
tecnologias[0] = "Codeigniter";

const nuevoArray2 = tecnologias.map((element) => {
    if(element === 'HTML'){
        return 'Codeigniter';
    } else {
        return element;
    }
});

console.log(tecnologias);
console.log(nuevoArreglo);
console.log(nuevoArray);
console.log(nuevoArray2);