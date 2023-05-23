// Iterar arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

//forEach - Acceder a cada elemento del array
tecnologias.forEach((element) => {
    console.log(`Elemento: ${element}`);
});

// Map permite crear un nuevo arreglo
const arrayMapTecnologias = tecnologias.map((element) => {
    console.log(element);
    return element;
});

console.log(arrayMapTecnologias);