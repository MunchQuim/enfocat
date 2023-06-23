
let bloqueo = false;

let lvl_hambre = 100;
const hambre = document.getElementById("hambre");
const wHambre = hambre.offsetWidth;
timer(200, 1);

let lvl_entretenimiento = 100;
const entretenimiento = document.getElementById("entretenimiento");
const wEntre = entretenimiento.offsetWidth;
timer(700, 2);

let lvl_fuerza = 100;
const fuerza = document.getElementById("fuerza");
const wFuerza = fuerza.offsetWidth;
timer(400, 3);

let lvl_energia = 100;
const energia = document.getElementById("energia");
const wEnergia = energia.offsetWidth;
timer(3600, 4);

let lvl_felicidad = 100;
const felicidad = document.getElementById("felicidad");
const wFeli = felicidad.offsetWidth;

//funcion zoom//
function zoom(id) {
    document.getElementById("" + id + "").style.scale = "1.2";

}
function noZoom(id) {
    document.getElementById("" + id + "").style.scale = "1";
}
//
function timer(tiempo, barra) {
    setInterval(() => {
        switch (barra) {
            case 1:
                hambre.style.width = "" + (wHambre * lvl_hambre / 100) + "px";
                lvl_hambre--;
                if (50 > lvl_hambre) {
                    hambre.style.backgroundColor = "yellow";
                } else if (25 > lvl_hambre) {
                    hambre.style.backgroundColor = "red";
                }
                break;
            case 2:
                entretenimiento.style.width = "" + (wEntre * lvl_entretenimiento / 100) + "px";
                lvl_entretenimiento--;
                if (50 > lvl_entretenimiento) {
                    entretenimiento.style.backgroundColor = "yellow";
                } else if (25 > lvl_entretenimiento) {
                    entretenimiento.style.backgroundColor = "red";
                }
                break;
            case 3:
                fuerza.style.width = "" + (wFuerza * lvl_fuerza / 100) + "px";
                lvl_fuerza--;
                if (50 > lvl_fuerza) {
                    fuerza.style.backgroundColor = "yellow";
                } else if (25 > lvl_fuerza) {
                    fuerza.style.backgroundColor = "red";
                }
                break;
            case 4:
                energia.style.width = "" + (wEnergia * lvl_energia / 100) + "px";
                lvl_energia--;
                if (50 > lvl_energia) {
                    energia.style.backgroundColor = "yellow";
                } else if (25 > lvl_energia) {
                    energia.style.backgroundColor = "red";
                }
                break;
        }
        lvl_felicidad = (lvl_hambre + lvl_entretenimiento + lvl_fuerza + lvl_energia) / 4;
        felicidad.style.width = "" + (wFeli * lvl_felicidad / 100) + "px";
        if (50 > lvl_felicidad) {
            felicidad.style.backgroundColor = "yellow";
        } else if (25 > lvl_felicidad) {
            felicidad.style.backgroundColor = "red";
        }
    }, tiempo);
}

function comer(comida) {
    //la idea es que no se pueda comer mas de x veces seguida un tipo de comida y o 
    //que estas recuperen diferentes elementos// buena idea poner saturacion
    switch (comida) {
        case 1://helado, +hambre ++entretenimiento -fuerza
            lvl_hambre += 10;
            lvl_entretenimiento += 10;
            lvl_fuerza -= 10;
            break;
        case 2://zanahoria, ++hambre -entretenimiento 
            lvl_hambre = lvl_hambre + 20;
            lvl_entretenimiento = lvl_entretenimiento - 10;
            console.log(lvl_entretenimiento);
            break;
        case 3://carne, +++hambre
            lvl_hambre += 30;
            lvl_fuerza += 5;
            break;
    }
    max();
}
function max() {
    if (lvl_hambre > 100) {
        lvl_hambre = 100;
    }
    if (lvl_entretenimiento) {
        lvl_entretenimiento = 100;
    }
    if (lvl_fuerza) {
        lvl_fuerza = 100;
    }
    if (lvl_energia) {
        lvl_energia = 100;
    }
}
