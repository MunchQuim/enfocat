//      1       //

let variable_1 = "Quim";
let variable_2 = 43;
let variable_5 = "YO";
let variable_3;
let variable_4 = false;
const A_dato =[variable_1,variable_2,variable_3,variable_4,variable_5];
let bucle = A_dato.length - 1;
//      2+3     //
while (bucle>= 0){
    console.log (A_dato[bucle] + " es un \"" + typeof(A_dato[bucle]));
    bucle -=1;
}

let Vglobal = "Hola! Soy una variable global.";

if (true){
    let Vlocal = "Hola! soy una variable local.";
    console.log (Vglobal + " " + Vlocal);
}
