const iconos = ["💎", "🧻", "✂", "🔫"];
let numero = 4;

let corazones = ["","💔","💖"];
let miscorazones="";
let rivcorazones="";
let midaño = 0;
let rivaldaño = 0;
let nombre = "";

let mivida = 3;
let eneVida = 0;
let eneDmg = 0;
let eneNom = "";

//      funciones       //


//combate_funcion//
function combate(maquina, persona) {
    document.getElementById("rivalOpcion").innerHTML = iconos[maquina];
    if (maquina == persona) {
        empate(persona, maquina);
    } else
        switch ((maquina + persona)) {
            case 1:
                if (persona > maquina) {
                    ganar(persona, maquina);
                } else {
                    perder(persona, maquina);
                }
                break;
            case 2:
                if (persona < maquina) {
                    ganar(persona, maquina);
                } else {
                    perder(persona, maquina);
                }
                break;
            case 3:
                if (persona > maquina) {
                    ganar(persona, maquina);
                } else {
                    perder(persona, maquina);
                }
                break;
            default:
                console.log("¡¿PERO QUE?!");
                break;
        }
    let sec = 2;
    let timer = setInterval(function () {
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            numero = 4;
            timer();
        }
    }, 1000);

}

//ganar_funcion//
function ganar(per, maq) {
    document.getElementById("timer").innerHTML = iconos[per] + "🆚" + iconos[maq] +
        "\n¡Has ganado!\n😊";
    eneVida--;
    if (eneVida <= 0) {

    }
}
//perder_funcion//
function perder(per, maq) {
    document.getElementById("timer").innerHTML = iconos[per] + "🆚" + iconos[maq] + "\n¡Has perdido!\n😭";
    mivida -= eneDmg;
}
//empate_funcion//
function empate(per, maq) {
    document.getElementById("timer").innerHTML = iconos[per] + "🆚" + iconos[maq] + "\n¡EMPATE!\n¡OTRA VEZ!";
}

//  funciones_html  //

//start_function//
function start() {
    document.getElementById("pantalla-1").style.display = "none";
    document.getElementById("pantalla-2").style.display = "grid";
    const collection = document.getElementById("pantalla-2").children;
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "block";
    }


}
function guardar_nombre() {
    nombre = document.getElementById("inputName").value;
    document.getElementById("pantalla-2").style.display = "none";
    document.getElementById("pantalla-3").style.display = "grid";
    document.getElementById("miNombre").innerText = nombre;
    const collection = document.getElementById("pantalla-3").children;
    for (let i = 0; i < collection.length; i++) {
        switch (i) {
            case 2:
                collection[i].style.display = "flex";
                break;

            default:
                collection[i].style.display = "block";
                break;
        }
    }
    const rivales = document.getElementById("contrincantes").children;
    for (let i = 0; i < rivales.length; i++) {
        rivales[i].style.display = "block";
    }
}
//
function estadisticas(dmg, vida, nom) {
    eneVida = vida;
    eneDmg = dmg;
    eneNom = nom;
    document.getElementById("pantalla-3").style.display = "none";
    document.getElementById("pantalla-4").style.display = "grid";
    const collection = document.getElementById("pantalla-4").children;
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "flex";
    }
    document.getElementById("miNombre-2").innerText = nombre;
    document.getElementById("nombreRival").innerText = eneNom;
    formarvida(mivida);
    console.log(mivida);
    formarvidarival(eneVida);
    console.log(eneVida);

    
}
//funcion tiempo//
function timer() {
    let sec = 3;
    let timer = setInterval(function () {
        document.getElementById("timer").innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            switch (eneNom) {
                case "Randy Random":
                    randy(numero);
                    break;
                case "Rocky Rock":
                    rocky(numero);
                    break;
                case "Alberto Manostijeras":
                    alberto(numero);
                    break;
            }
        }
    }, 1000);
}
//funcion opcion//
function opcion(key) {
    document.getElementById("tuOpcion").innerText = iconos[key];
    numero = key;
}
//funcion victoria//
function victoria() {
    document.getElementById("pantalla-4").style.display = "none";
    document.getElementById("pantalla-4").style.display = "none";
    document.getElementById("pantalla-5").style.display = "block";
    document.getElementById("pantalla-5").style.backgroundColor = "skyblue";
    document.getElementById("pantalla-5").style.color = "blue";
    document.getElementById("pantalla-5").innerText = "VICTORIA";

}
//funcion derrota//
function derrota() {
    document.getElementById("pantalla-4").style.display = "none";
    document.getElementById("pantalla-5").style.display = "block";
    document.getElementById("pantalla-5").style.backgroundColor = "black";
    document.getElementById("pantalla-5").style.color = "white";
    document.getElementById("pantalla-5").innerText = "DERROTA";

}
//funcion reset//
function reset() {
    numero = 4;
    nombre = "";
    mivida = 3;
    eneVida = 0;
    eneDmg = 0;
    eneNom = "";
    document.getElementById("pantalla-5").style.display = "none";
    document.getElementById("pantalla-1").style.display = "block";
}
//funcion formar vida//
function formarvida(params) {
    miscorazones = "";
    for (let index = 0; index < params; index++) {
        miscorazones = miscorazones.concat(corazones[2-midaño]);
        midaño=0;        
    }
    document.getElementById("miVida").innerText = miscorazones;    
}
//funcion formar vida rival//
function formarvidarival(params) {
    rivcorazones="";
    for (let index = 0; index < params; index++) {
        rivcorazones= rivcorazones.concat(corazones[2-rivaldaño]);
        rivaldaño=0;        
    }
    document.getElementById("rivalVida").innerText = rivcorazones;    
}

//resultado//

//      comportamientos_combate     //
//randy//
function randy(tunum) {
    let resultado = Math.floor(Math.random() * 3);//0,1,2//
    combate(resultado, tunum);
}
const randyDmg = 1;
let randyVida = 3;
const randyName = "Randy Random";

//Rocky rock//
function rocky(tunum) {
    let num = Math.floor(Math.random() * 10);//0,1.....9//
    let resultado = 0;
    if (3 < num < 8) {/*piedra*/
        resultado = 0;
    } else if (num >= 8) {/*papel*/
        resultado = 1;
    } else {
        resultado = 2;
    }
    combate(resultado, tunum);
}
const rockyDmg = 1;
let rockyVida = 6;
const rockyName = "Rocky Rock";
//Aberto manostijeras//
function alberto(tunum) {
    let num = Math.floor(Math.random() * 10);//0,1.....9//
    let resultado = 0;
    if (num == 0) {/*piedra*/
        resultado = 0;
    } else if (num >= 8) {/*papel*/
        resultado = 1;
    } else {
        resultado = 2;
    }
    combate(resultado, tunum);
}
const albertoDmg = 2;
let albertoVida = 3;
const albertoName = "Alberto Manostijeras";














//      empatan piedras                       en suma  0
//      roca 0 pierde   contra papel 1      en suma  1
//      papel 1 gana    contra piedra 0     en suma  1

//      roca 0 gana     contra tijeras 2    en suma  2
//      tijeras 2 pierde contra piedra 0    en suma  2

//      papel 1 pierde  contra tijeras 2    en suma  3
//      tijeras 2 gana  contra papel 1      en suma  3
