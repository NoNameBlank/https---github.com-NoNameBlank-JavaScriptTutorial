"use strict";

// Zufallszahlen
// Math.random() gibt uns eine Zufallszahl, zwischen 0 - 1    (0 inclusive & 1 exclusive d.h. Zahl 0 kann kommen doch zahl 1 kommt NIE!) (0 - 0.9999999999...)
console.log(Math.random());

console.log(Math.floor(Math.random() * (12 + 1)));


let minimum = 40;
let maximum = 60;

console.log(Math.floor(Math.random() * (maximum - minimum + 1) + minimum));


let min_fun = 80;
let max_fun = 100;

const zufallszahl = function(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(zufallszahl(min_fun, max_fun));

