"use strict";

/*

const meine_funktion = function(parameter_1, parameter_2) {
    auszführender Code
};

meine_funktion(p_1, p_2);

*/

const log_die_zahl = function(a) {
    console.log(a);
};

log_die_zahl(42);


const begruessung = function(x, y) {
    console.log(`Hallo, ${x} ${y}!`);
};

let vor = "Max";
let nach = "Muster";

begruessung("Rick", "Schein");
begruessung(vor, nach);

/*
Schreibt eine Funktion die 2 Parameter übergeben bekommt (Zahlen)
5 console.logs erhalten 
+ - * / %
5 Variablen zwischen 1 - 100


*/



const berechnungen = function(a, b) {
    console.log("Die Addition ergibt: " + (a + b));
    console.log("Die Subtraktion ergibt: " + (a - b));
    console.log("Die Multiplikation erbigt: " + (a * b));
    console.log("Die Division ergibt: " + (a / b));
    console.log("Der Modulo ergibt: " + (a % b));
    console.log("----------------------------------")
};

let zahl_1 = 5;
let zahl_2 = 10;
let zahl_3 = 15;
let zahl_4 = 20;
let zahl_5 = 25;

berechnungen(zahl_1, zahl_2);
berechnungen(zahl_3, zahl_2);
berechnungen(zahl_4, zahl_5);
berechnungen(zahl_5, zahl_1);
berechnungen(zahl_4, zahl_5);