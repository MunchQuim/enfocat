const rev = document.getElementById("reverso");
let interruptor = false;
const int = document.getElementById("interactuable");
int.addEventListener("mouseenter", hover);
int.addEventListener("mouseleave", leave);
//funciones//
function hover() {
    rev.style.width = "0px";
}
function leave() {
    rev.style.width = "300px";
    if (interruptor == false) {
        rev.src = "./img/card-back.png";
        interruptor = true;
    }
    else {
        rev.src = "./img/card-front.png";
        interruptor = false;
    }
}