//      numero aleatorio 0-1        //
console.log(Math.random());
//      redondear numero        //
console.log(Math.round(Math.PI));
//      redondear numero al decimal    //
function redpo (num, pot){
    let ope = Math.round(num*Math.pow(10,pot));
    console.log (ope/Math.pow(10,pot));
}
redpo(Math.PI,5);

