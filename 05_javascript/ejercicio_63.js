

//      1       //
const arrow = (name, surname) => {
    return ("Hola " + name + " " + surname + ". Como están los maquinas.")
};

const retorno = arrow("Quim", "Pineda");
console.log(retorno);
//      2       // 
function conNombre(dato_1) {
    console.log("Esto es ...    " + dato_1);
}
conNombre(false);
//      3       //
const infinito = function (...valores) {
    valores.forEach(elementos => { console.log(elementos) }
    );
};
infinito(1, 2, 3, 4, 5);
