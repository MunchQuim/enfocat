let emojis = ["😀", "🍕", "🐳", "🍞", "🦄", "🦈", "👩‍🦰", "🐱", "🙈", "🐹"];
const posremove = document.getElementById("posRemove");
const posinsert = document.getElementById("posInsert");

//      matriz visible      //
let nueva = [];
const nueva_array = document.getElementById("nueva_array");
const wrhtml = (addTxt) => {
    nueva_array.innerHTML = "[" + addTxt + "]";
}

//      Eventos      //

//push//
const btnPush = document.getElementById("btnPush");
btnPush.addEventListener("click", push);

//unshift//
const btnUnshift = document.getElementById("btnUnshift");
btnUnshift.addEventListener("click", unshift);

//insert_at//
const btnInsert = document.getElementById("btnInsert");
btnInsert.addEventListener("click", insert);

//pop//
const btnPop = document.getElementById("btnPop");
btnPop.addEventListener("click", pop);

//shift//
const btnShift = document.getElementById("btnShift");
btnShift.addEventListener("click", shift);

//remove_at//
const btnRemove = document.getElementById("btnRemove");
btnRemove.addEventListener("click", remove);


//      Funciones       //

//push_function//
function push() {
    if (emojis.length > 0) {
        let randomChar = Math.floor(Math.random() * emojis.length);
        nueva.push(emojis[randomChar]);
        emojis.splice(randomChar, 1);
        wrhtml(nueva);
        max();     
    }
    else {
        console.log("No quedan emojis 😱");
    }
}

//unshift_function//
function unshift() {
    if (emojis.length > 0) {
        let randomChar = Math.floor(Math.random() * emojis.length);
        nueva.unshift(emojis[randomChar]);
        emojis.splice(randomChar, 1);
        wrhtml(nueva);
        max();
    } else {
        console.log("No quedan emojis 😱");
    }
}

//insert at_function//
function insert() {
    /* if (posinsert.value > nueva.length) {
        posinsert.value = nueva.length;
    } */
    max();
    if (emojis.length > 0) {
        let randomChar = Math.floor(Math.random() * emojis.length);
        if (nueva.length == 0 || nueva.length==posinsert.value) {
            nueva.push(emojis[randomChar]);
        }else {
            nueva = nueva.flatMap((value, index) => index == posinsert.value ? [emojis[randomChar], value] : value);
        }
        emojis.splice(randomChar, 1);
        wrhtml(nueva);
        max();
    } else {
        console.log("No quedan emojis 😱");
    }
}

//pop_function//
function pop() {
    if (nueva.length > 0) {
        emojis.push(nueva[nueva.length - 1]);
        nueva.pop();
        wrhtml(nueva);
        max();
    } else {
        console.log("No quedan emojis 😱");
    }
}


//shift_function//
function shift() {
    if (nueva.length > 0) {
        emojis.unshift(nueva[0]);
        nueva.shift();
        wrhtml(nueva);
        max();
    } else {
        console.log("No quedan emojis 😱");
    }
}

//remove at_function//
function remove() {
    max();
    if (nueva.length > 0) {
        emojis.unshift(nueva[posremove.value]);
        nueva.splice(posremove.value, 1);
        wrhtml(nueva);
        max();
    } else {
        console.log("No quedan emojis 😱");
    }

}
//max_function//
function max() {
    posinsert.setAttribute("max", nueva.length);
    if (nueva.length > 0) {
        posremove.setAttribute("max", nueva.length - 1);
    } else {
        posremove.setAttribute("max", nueva.length);
    }
    if (posinsert.value > posinsert.getAttribute("max")) {
        posinsert.value = posinsert.getAttribute("max");
    }
    if (posremove.value > posremove.getAttribute("max")) {
        posremove.value = posremove.getAttribute("max");
    }
}
//animacion_function//
 /* function animacion(obj) {
    nueva_array[index]

    const objeto = nueva_array[index];
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 1000) {
            clearInterval(timer); // finish the animation after 1 seconds
            return;
        }
        
    }, 20);
}  */
//      Ejecución inicio        //
max();
wrhtml(nueva);

