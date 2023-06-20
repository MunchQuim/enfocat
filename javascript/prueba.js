let nombre = "";
let vida = 3;
let midaño = 0;
let eneVida = 0;
let eneDmg = 0;
let eneNom = ""
let corazones = ["","💔","💖"];
let miscorazones = "";
let rivcorazones=[];

function micorazonfun(params) {
    miscorazones = "";
    for (let index = 0; index < params; index++) {
        miscorazones = miscorazones.concat(corazones[2-midaño]);
        midaño=0;        
    }
    document.getElementById("prueba").innerText = miscorazones;
    
}
micorazonfun(vida);
