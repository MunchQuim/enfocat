const iconos = ["💎", "🧻", "✂", "🔫"];
let nombre = "";

//      funciones       //

function eleccion(tunum) {
    let resultado = Math.floor(Math.random() * 3);
    combate(resultado, tunum);
}
//combate_funcion//
function combate(maquina, persona) {
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
}

//ganar_funcion//
function ganar(per, maq) {
    console.log(iconos[per] + "🆚" + iconos[maq] + "\n¡Has ganado!\n😊");
}
//perder_funcion//
function perder(per, maq) {
    console.log(iconos[per] + "🆚" + iconos[maq] + "\n¡Has perdido!\n😭");
}
//empate_funcion//
function empate(per, maq) {
    console.log(iconos[per] + "🆚" + iconos[maq] + "\n¡EMPATE!\n¡OTRA VEZ!");
}
//start_function//
function start() {
    document.getElementById("menu_btn").style.display = "none";
    document.getElementById("nombrador").style.display = "flex";
}
function guardar_nombre() {
    nombre=document.getElementById("inputName").value;
    document.getElementById("nombrador").style.display = "none";
    document.getElementById("contrincantes").style.display = "block";
    document.getElementById("miNombre").innerText = nombre;
}
//













//      empatan piedras                       en suma  0
//      roca 0 pierde   contra papel 1      en suma  1
//      papel 1 gana    contra piedra 0     en suma  1

//      roca 0 gana     contra tijeras 2    en suma  2
//      tijeras 2 pierde contra piedra 0    en suma  2

//      papel 1 pierde  contra tijeras 2    en suma  3
//      tijeras 2 gana  contra papel 1      en suma  3
