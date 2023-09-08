"use strict";

const multiplizieren = function(a, b) {
    return a * b;
};

let z1 = 5;
let z2 = 5;


let ergebnis = multiplizieren(z1, z2);
console.log(ergebnis);

let ergebnis_2 = multiplizieren(ergebnis, ergebnis);
console.log(ergebnis_2);

let ergebnis_3 = multiplizieren(multiplizieren(z1, z2), multiplizieren(z1, z2));
console.log(ergebnis_3);

//console.log(multiplizieren(multiplizieren(z1, z2), multiplizieren(z1, z2)));