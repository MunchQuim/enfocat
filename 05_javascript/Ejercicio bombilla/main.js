const btn = document.getElementById("button");
const zoom = document.getElementById("zoom");
const light = document.getElementById("opa");
const rot = document.getElementById("rot");
const inpopa = document.getElementById("inpOpa")
const inzoom = document.getElementById("inZoom")
const inrot = document.getElementById("inRot");
const bombilla2 = document.getElementById("bombilla-2");
const bombilla1 = document.getElementById("bombilla-1");
let on = false;
function btn_click() {
    if (on == false) {
        btn.src = "./img/bon.jpg";
        zoom.style.display = "block";
        light.style.display = "block";
        rot.style.display = "block";
        bombilla2.style.opacity = inpopa.value/100;        
        on = true;
    } else {
        btn.src = "./img/boff.jpg";
        zoom.style.display = "none";
        light.style.display = "none";
        rot.style.display = "none";
        bombilla2.style.opacity = 0;        
        on = false;
    }
}

function tamano(){
    bombilla2.style.scale = inzoom.value/100;
    bombilla1.style.scale = inzoom.value/100;    
}
function opacity(){
    bombilla2.style.opacity = inpopa.value/100;    
}
function rota(){
    bombilla1.style.transform = "rotate("+inrot.value+"deg)";
    bombilla2.style.transform = "rotate("+inrot.value+"deg)";
}