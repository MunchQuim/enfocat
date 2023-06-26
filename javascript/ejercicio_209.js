//notas para añadir, pausa, muerte//
let bloqueo = false;
ticks(100);

let vida = 3;
let gameover = false;
let puntuacion = 0;

let tick = 2;//200/el numero de ticks
let red = true;

let lvl_hambre = 100;
const hambre = document.getElementById("hambre");
const wHambre = hambre.offsetWidth;
timer(200, 1);
let on_ham = true;

let lvl_entretenimiento = 100;
const entretenimiento = document.getElementById("entretenimiento");
const wEntre = entretenimiento.offsetWidth;
timer(400, 2);
let on_ent = true;

let lvl_fuerza = 100;
const fuerza = document.getElementById("fuerza");
const wFuerza = fuerza.offsetWidth;
timer(300, 3);
let on_fue = true;

let lvl_energia = 100;
const energia = document.getElementById("energia");
const wEnergia = energia.offsetWidth;
timer(500, 4);
let on_ene = true;

let lvl_felicidad = 100;
const felicidad = document.getElementById("felicidad");
const wFeli = felicidad.offsetWidth;
let on_fel = true;

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
                if (lvl_hambre > 0) { lvl_hambre--; }
                break;
            case 2:
                entretenimiento.style.width = "" + (wEntre * lvl_entretenimiento / 100) + "px";
                if (lvl_entretenimiento > 0) { lvl_entretenimiento--; }
                break;
            case 3:
                fuerza.style.width = "" + (wFuerza * lvl_fuerza / 100) + "px";
                if (lvl_fuerza > 0) { lvl_fuerza--; }
                break;
            case 4:
                energia.style.width = "" + (wEnergia * lvl_energia / 100) + "px";
                if (lvl_energia > 0) { lvl_energia--; }
                break;
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
            break;
        case 3://carne, +++hambre
            lvl_hambre += 30;
            lvl_fuerza += 5;
            break;
    }
    max();
}
function entretener(ent) {
    switch (ent) {
        case 1:// videojuegos entretenimiento +++
            lvl_entretenimiento += 30;
            break;
        case 2:// pelota entretenimiento ++ ejercicio +
            lvl_fuerza += 5;
            lvl_entretenimiento += 20;
            lvl_energia -= 5;
            break;
        case 3:// ajedrez entretenimiento ++
            lvl_entretenimiento += 20;
            break;
    }
    max();
}
function ejercicio(eje) {
    switch (eje) {
        case 1:// lucha fuerza +++ energia- hambre -
            lvl_fuerza += 30;
            lvl_energia -= 5;
            lvl_hambre -= 5;
            if (Math.floor(Math.random() * 5) == 0) {
                vida--;
                document.getElementById("entreno").style.scale = "0.9";
                setTimeout(() => {
                    document.getElementById("entreno").style.scale = "1.2";
                }, 100);


            }
            //perder vida aleatoriamente.
            break;
        case 2:// atletismo fuerza +++ energia- hambre -
            lvl_fuerza += 20;
            lvl_energia -= 5;
            lvl_hambre -= 5;
            break;
    }
    max();
}
function descansar(des) {
    switch (des) {
        case 1://dormir energia +++ pausa?
            lvl_energia += 100;
            // temporizador en que todo deja de funcionar
            break;
        case 2:// pasear energia +
            lvl_energia += 20;
            break;
    }
    max();
}
function max() {
    if (lvl_hambre > 100) {
        lvl_hambre = 100;
    }
    if (lvl_entretenimiento > 100) {
        lvl_entretenimiento = 100;
    }
    if (lvl_fuerza > 100) {
        lvl_fuerza = 100;
    }
    if (lvl_energia > 100) {
        lvl_energia = 100;
    }
}
function ticks(time) {//actualiza las barras cada time ms
    setInterval(() => {
        hambre.style.width = "" + (wHambre * lvl_hambre / 100) + "px";
        if (50 <= lvl_hambre) {
            on_ham = true;
            hambre.style.backgroundColor = "green";
            document.getElementById("c_hambre").style.boxShadow = "0px 0px 0px 0px black"
        } if (50 > lvl_hambre && 25 < lvl_hambre) {
            hambre.style.backgroundColor = "yellow";
            on_ham = true;
            document.getElementById("c_hambre").style.boxShadow = "0px 0px 0px 0px black"
        } if (25 >= lvl_hambre) {
            hambre.style.backgroundColor = "red";
            if (on_ham == true) {
                on_ham = false;
                perdervida("c_hambre", 1);
            }
        }

        entretenimiento.style.width = "" + (wEntre * lvl_entretenimiento / 100) + "px";
        if (50 <= lvl_entretenimiento) {
            on_ent = true;
            entretenimiento.style.backgroundColor = "green";
            document.getElementById("c_entre").style.boxShadow = "0px 0px 0px 0px black"
        } if (50 > lvl_entretenimiento && 25 < lvl_entretenimiento) {
            on_ent = true;
            entretenimiento.style.backgroundColor = "yellow";
            document.getElementById("c_entre").style.boxShadow = "0px 0px 0px 0px black"
        } if (25 >= lvl_entretenimiento) {
            entretenimiento.style.backgroundColor = "red";
            if (on_ent == true) {
                on_ent = false;
                perdervida("c_entre", 2);
            }
        }

        fuerza.style.width = "" + (wFuerza * lvl_fuerza / 100) + "px";
        if (50 <= lvl_fuerza) {
            on_fue = true;
            fuerza.style.backgroundColor = "green";
            document.getElementById("c_fuerza").style.boxShadow = "0px 0px 0px 0px black"
        } if (50 > lvl_fuerza && 25 < lvl_fuerza) {
            on_fue = true;
            fuerza.style.backgroundColor = "yellow";
            document.getElementById("c_fuerza").style.boxShadow = "0px 0px 0px 0px black"
        } if (25 >= lvl_fuerza) {
            fuerza.style.backgroundColor = "red";
            if (on_fue == true) {
                on_fue = false;
                perdervida("c_fuerza", 3);
            }
        }

        energia.style.width = "" + (wEnergia * lvl_energia / 100) + "px";
        if (50 <= lvl_energia) {
            on_ene = true;
            energia.style.backgroundColor = "green";
            document.getElementById("c_energia").style.boxShadow = "0px 0px 0px 0px black"
        } if (50 > lvl_energia && 25 < lvl_energia) {
            on_ene = true;
            energia.style.backgroundColor = "yellow";
            document.getElementById("c_energia").style.boxShadow = "0px 0px 0px 0px black"
        } if (25 >= lvl_energia) {
            energia.style.backgroundColor = "red";
            if (on_ene == true) {
                on_ene = false;
                perdervida("c_energia", 4);
            }
        }

        lvl_felicidad = (lvl_hambre + lvl_entretenimiento + lvl_fuerza + lvl_energia) / 4;
        felicidad.style.width = "" + (wFeli * lvl_felicidad / 100) + "px";
        if (50 <= lvl_felicidad) {
            on_fel = true;
            felicidad.style.backgroundColor = "green";
            document.getElementById("c_felicidad").style.boxShadow = "0px 0px 0px 0px black"
        } if (50 > lvl_felicidad && 25 < lvl_felicidad) {
            on_fel = true;
            felicidad.style.backgroundColor = "yellow";
            document.getElementById("c_felicidad").style.boxShadow = "0px 0px 0px 0px black"
        } if (25 >= lvl_felicidad) {
            felicidad.style.backgroundColor = "red";
            if (on_fel == true) {
                on_fel = false;
                perdervida("c_felicidad", 5);
            }
        }
        // devuelve a 0 los valores que hayan podido bajar por debajo de 0
        if (lvl_hambre < 0) { lvl_hambre = 0; }
        if (lvl_entretenimiento < 0) { lvl_entretenimiento = 0; }
        if (lvl_fuerza < 0) { lvl_fuerza = 0; }
        if (lvl_energia < 0) { lvl_energia = 0; }

        formarvida(vida);
        // esto controla el shadowing
        tick--
        if (tick == 0 && red == true) {
            red = false;
            tick = 2;
        }
        if (tick == 0 && red == false) {
            red = true;
            tick = 2;
        }
        // devuelve vida en caso de tener todo bastante alto
        if ((lvl_hambre && lvl_entretenimiento && lvl_fuerza && lvl_energia) > 50 && vida < 3) {
            let num = Math.floor(Math.random() * 200);
            if (num == 0) {
                vida++;
            }
        }
        if (vida == 0) {
            game_over();
        }
        // puntua
        if (gameover == false) { puntuacion++; }

    }, time)
}
function formarvida(param) {
    corazones = "";
    for (let index = 0; index < param; index++) {
        corazones = corazones.concat("💖");
    }
    document.getElementById("vida").innerText = corazones;
}
function perdervida(barra, check) {
    let intentos = 5;
    switch (check) {
        case 1:
            let ham = setInterval(() => {
                if (on_ham == true) { clearInterval(ham); }
                if (intentos > 0) {//de quedar intentos hay
                    let num = Math.floor(Math.random() * 5);

                    if (num == 0) {// un 20% de probabilidades
                        intentos--; //de perder un intento
                    }
                } else {//si no quedan intentos
                    vida--;//pierde un corazon
                    intentos = 5; //y resetea los intentos
                } shadow(barra);
            }, 500);
            break;
        case 2:
            let ent = setInterval(() => {
                if (on_ent == true) { clearInterval(ent); }
                if (intentos > 0) {//de quedar intentos hay
                    let num = Math.floor(Math.random() * 5);

                    if (num == 0) {// un 20% de probabilidades
                        intentos--; //de perder un intento
                    }
                } else {//si no quedan intentos
                    vida--;//pierde un corazon
                    intentos = 5; //y resetea los intentos
                } shadow(barra);
            }, 500);

            break;
        case 3:
            let fue = setInterval(() => {
                if (on_fue == true) { clearInterval(fue); }
                if (intentos > 0) {//de quedar intentos hay
                    let num = Math.floor(Math.random() * 5);

                    if (num == 0) {// un 20% de probabilidades
                        intentos--; //de perder un intento
                    }
                } else {//si no quedan intentos
                    vida--;//pierde un corazon
                    intentos = 5; //y resetea los intentos
                } shadow(barra);
            }, 500);
            break;
        case 4:
            let ene = setInterval(() => {
                if (on_ene == true) { clearInterval(ene); }
                if (intentos > 0) {//de quedar intentos hay
                    let num = Math.floor(Math.random() * 5);

                    if (num == 0) {// un 20% de probabilidades
                        intentos--; //de perder un intento
                    }
                } else {//si no quedan intentos
                    vida--;//pierde un corazon
                    intentos = 5; //y resetea los intentos
                } shadow(barra);
            }, 500);
            break;
        case 5:
            let fel = setInterval(() => {
                if (on_fel == true) { clearInterval(fel); }
                if (intentos > 0) {//de quedar intentos hay
                    let num = Math.floor(Math.random() * 5);

                    if (num == 0) {// un 20% de probabilidades
                        intentos--; //de perder un intento
                    }
                } else {//si no quedan intentos
                    vida--;//pierde un corazon
                    intentos = 5; //y resetea los intentos
                } shadow(barra);
            }, 500);
            break;
    }
}

function shadow(barra) {

    // un true false para ir cambiando el shadow
    if (red == true) {
        document.getElementById(barra).style.boxShadow = "0px 0px 1px 3px red" //shadow rojo que dura 0.5s
    } else {
        document.getElementById(barra).style.boxShadow = "0px 0px 0px 0px black" //no shadow que dura 0.5s
    }
}

function game_over(puntos) {
    gameover = true;
    const collection = document.getElementById("todo").children;
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "none";
    }
    document.getElementById("game_over").style.display = "flex";
    document.getElementById("puntuacion").innerText = "Puntuacion:" + puntuacion + "";

}