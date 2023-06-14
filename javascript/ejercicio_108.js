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


//      ejercicio 6     //