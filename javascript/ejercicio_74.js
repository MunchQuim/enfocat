//      suma de 3 numeros       //
function mates(...valor) {
    let resultado = 0;
    valor.forEach(element => {
        resultado += element;
    });
    return (resultado);
}

console.log(mates(1, 1, 1));

//      concatenacion de nombres        //
function nombres(...valor) {
    let resultado = "";
    valor.forEach(element => {
        resultado += element;
    });
    return (resultado);
}

console.log(nombres("Quim ", "Pineda ", "Sotés."));
//      funcion comparacion     //
/* const arr = [-1, -5, 5, -8]; */
function comparacion(...arr) {
    return (arr.sort()[arr.length - 1]);
}
console.log(comparacion(1,4,6,-8))

