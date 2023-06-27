console.log("hola mundo");
var nombre = 'Quim'; //var es una chapuza y es mejor no usarlo, en su defecto usar let
let apellido = 'Pineda';
const APELLIDO_2 = 'Sotes'; /*las constantes se suelen ponern en mayusculas para indicar que no se
                            pueden alterar */

let DNI = null; //solamente existe cuando se le llama

let dni; //declaras una variable pero sin ningun valor

///old school///
console.log(nombre + " " + apellido + " " + apellido2);
//template literals///
console.log('${nombre} ${apellido} ${apellido2}');//hay que mirar por qe no funciona

const valor1 = Symbol('simbolo');
const valor2 = Symbol('simbolo');

console.log(valor1 == valor2);//false //pero me sale true
console.log(valor1.description == valor2.description);//true

/* const persona {
    var pnombre = 'Quim';
    let papellido = 'Pineda';
    const papellido2 = 'Sotes';
};  no me funciona, algo falta algo sobra*/

function saludar(){
    console.log("hola");
    //alert("hola"); para llamar mediante navegador, muy intrusivamente
}