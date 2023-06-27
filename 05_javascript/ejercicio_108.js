//      ejercicio 1     //
let menu_durum=["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍙","🥑"];

console.log(menu_durum.fill("🍺",menu_durum.indexOf("🍕")));
//      ejercicio 2     //
let menu_SoloPizza = ["🍕","🍕","🍍","🍕","🍕"];
console.log("El menu SoloPizza " + (menu_SoloPizza.every((num)=>num==="🍕")?"está salvado":"ha sido contaminado"));

//      ejercicio 3     //
console.log("procediendo a descontaminar \n...\n[" + (menu_SoloPizza.filter((num)=>num==="🍕"))+ "]\nDescontaminación completada.");

//      ejercicio 4     //
let fruitis =["🍓","🍋","🍓","🍋","🍓"];
console.log(fruitis.map((num)=>num === "🍓" ? "🍄": num));

//      ejercicio 5     //
let malaIdea = ["🌶","🥛","🌶","🥛","🌶","🥛"];
console.log(malaIdea.flatMap((num)=>num == "🌶"? [num , "🥵"]: num));

//      ejercicio 6     //
let baraja = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
//console.log(baraja.flatMap((num)=>baraja[baraja.indexOf(num)] === baraja[1+baraja.indexOf(num)] ? ["🎴","🃏"]: " "));
console.log(baraja.flatMap((value, index, array) => baraja[index] === baraja[index+1]
     ? [value,"🃏"]
     : value
));

