"use strict";

console.log(Math);

// Kreisfläche berechnen mit Radius
// A = PI * r^2

let a = Math.PI * Math.pow(12, 2);
console.log(a);

//Runden
let a_gerundet = Math.round(a);
console.log(a_gerundet);

let a_abgerundet = Math.floor(a);
console.log(a_abgerundet);

let a_aufgerundet = Math.ceil(a);
console.log(a_aufgerundet);

// Nachkommstellen

let a_nachkommastellen = a.toFixed(3); // Mann bekommt einen String zurück.. problem wegen weiter Rechnen
console.log(a_nachkommastellen);

//parseInt(Ganzzahl) parseFlowt(mit nachkommastellen)

let a_integer = parseInt(a_nachkommastellen);
console.log(a_integer);

let a_float = parseFloat(a_nachkommastellen);
console.log(a_float);