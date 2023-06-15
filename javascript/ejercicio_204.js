let emojis = ["😀","🍕","🐳","🍞","🦄","🦈","👩‍🦰","🐱","🙈","🐹"];

//      matriz visible      //
let nueva = [];
const nueva_array = document.getElementById("nueva_array");
const wrhtml = (addTxt)=>{
    nueva_array.innerHTML = addTxt;
};

//      PRUEBA      //
const btnPush = document.getElementById("btnPush");
btnPush.addEventListener("click", push)



//push//
function push() {
    if (emojis.length >= 0){
    let randomChar = Math.floor(Math.random()*emojis.length);
    nueva.push(emojis[randomChar]);
    emojis.splice(randomChar,1);
    console.log(emojis + "\n"+ emojis.length);
    console.log("Tu increible array; " + nueva);
    wrhtml(nueva);
    }
    else{
        console.log("No quedan emojis 😱");
    }

};
// push(emojis);
//unshift//
function unshift(arr){
    let sacrificio = Math.floor(Math.random()*emojis.length);
    nueva.unshift(emojis[sacrificio]);
    emojis.splice(sacrificio,1);
}
unshift(emojis);
//insert at//
function insertAt(arr){
    let sacrificio = Math.floor(Math.random()*emojis.length);
    nueva.unshift(emojis[sacrificio]);
    emojis.splice(sacrificio,1);
}

insertAt(emojis);
//pop//
function pop(arr){
    emojis.push(nueva[nueva.length-1]); 
    nueva.pop();   
}
pop(nueva);

//shift//
function shift(arr){
    emojis.unshift(nueva[0]);
    nueva.shift();
}
shift(nueva);
//remove at//