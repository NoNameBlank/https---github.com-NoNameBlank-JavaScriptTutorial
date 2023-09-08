"use strict";

//If-Anweisung

/*
if (Bedingung) {
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
};
*/


/*
if (true) {
    console.log("If wurde ausgeführt!");
}

if (false) {
    console.log("If wurde ausgeführt!");
}

console.log("Danach");


if (10 < 20) {
    console.log("If wurde ausgeführt!");
}



if (10 < 20 && 10 < 30) {
    console.log("If wurde ausgeführt");
}

*/

const mindestAlter = 18;
let benutzerAlter = 32;

if (benutzerAlter >= mindestAlter) {
    console.log("Du bist alt genug!");
}