//      substitucion de letras especificas      //

function transcriptora (text){
    //  estandariza el texto    //
texto = text.toLowerCase();
    //  cambia las "a" por "o"  //
texto = texto.replace(/a/g,"o");
    // may es la primera posicion a mayusculas      //
    // solo funciona cuando la primera sea String   //
let may = texto[0].toUpperCase();
    // reemplaza el primer caracter por may //
texto = texto.replace(/./,may);

console.log(texto);
// deberia simplificar y solucionar identificando el primer String //
}
transcriptora ("HOLA muy buenas");

//      ejercicio 2     //
function analizador (texto){
    //  estandariza el texto y busca que haya un "aca" en posicion 0//
    if (texto.toLowerCase().search("aca")==0){
        console.log ("Efectivamente empieza por " + texto.slice(0,3));
    }
    else {
        console.log("PUES NO MI CIELA")
    }
}
analizador("aCademia");
//      ejercicio saludador     //
function saludador(texto){
    //  estandariza el texto y busca que haya un "hola" en posicion 0//
    if (texto.toLowerCase().search("hola")==0){
        // imprime el (texto+" ")*3 //
        console.log(texto.concat(" ").repeat(3));
    }
}
saludador("Hola");
