"use strict";

// Date-Objekt

// erstellt das Aktuelle Datum
let d = new Date();
console.log(d);

// Unix-Zeitrechnung
// Die Zeit in MS seit dem 01.01.1970

console.log(Date.now());

// Option 1
let e = new Date(1454854095999);
console.log(e);

// Option 2
let f = new Date("Sep 23 2003 07:52:15 GMT+0200");
console.log(f);

let g = new Date("11.06.1993 14:47:21");
console.log(g);

let h = new Date("06. Dezember 1993 14:52:25");
console.log(h);

// new Date(jahr, monats-index[, tag[, stunde[, minute[, sekunde[, millisekunde]]]]])
let i = new Date(2012, 5, 23, 15,15,15,15); // Monats-index 0-11
console.log(i);