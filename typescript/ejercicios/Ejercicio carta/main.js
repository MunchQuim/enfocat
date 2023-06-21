const rev = document.getElementById("reverso");
const anv = document.getElementById("anverso");
const max_ancho = 300;
const vel = 1000;
const int = document.getElementById("interactuable");
int.addEventListener("mouseenter", hover);
int.addEventListener("mouseleave", leave);
//funciones//
//funcion cara
function hover() {
    rev.style.width = "0px";
    anv.style.width = "0px";
    let sec = 1;
    let timer = setInterval(function () {
        sec--;
        if (sec == 0) {
            clearInterval(timer);
            rev.style.display = "none";
            anv.style.display = "block"
            hover_2();
        }

    }, 500);
}


function hover_2() {
    let sec = 1;
    let timer = setInterval(function () {
        sec--;
        if (sec == 0) {
            clearInterval(timer);
            anv.style.width = "300px";
        }

    }, 100);

}
function leave() {
    anv.style.width = "0px";
    let sec = 1;
    let timer = setInterval(function () {
        sec--;
        if (sec == 0) {
            clearInterval(timer);
            anv.style.display = "none";
            rev.style.display = "block"
            leave_2();
        }

    }, 500);
}
function leave_2() {
    let sec = 1;
    let timer = setInterval(function () {
        sec--;
        if (sec == 0) {
            clearInterval(timer);
            rev.style.width = "300px";
        }

    }, 100);
}