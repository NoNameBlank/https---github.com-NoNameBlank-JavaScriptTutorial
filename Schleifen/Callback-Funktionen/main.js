"use strict";

// Call-Back Funktion  == Rückruf Funktion
// Einer Funktion einen Funktion als Parameter mit also Funktionen in Funktionen


/*
let function_1 = function() {
    console.log("Ich bin Funktion 1!");
};
*/

let function_2 = function(f) {
    console.log("Ich bin Funktion 2!");
    f();
};

//function_2(function_1);


function_2(function() {
    console.log("Ich bin Funktion 1!");
});