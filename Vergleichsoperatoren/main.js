"use strict";

//Numbers

console.log(42 == 42);
console.log(42 == 43);
console.log("---------------------------");

console.log(42 != 42);
console.log(42 != 43);
console.log("---------------------------");

console.log(42 > 42); //42 größer 42?
console.log(42 > 43);
console.log(43 > 42);
console.log("---------------------------");

console.log(42 < 42); //42 kleiner 42?
console.log(42 < 43);
console.log(43 < 42);
console.log("---------------------------");

console.log(42 >= 42); //42 größer oder gleich 42?
console.log(42 >= 43);
console.log(43 >= 42);
console.log("---------------------------");

console.log(42 <= 42); //42 kleiner oder gleich 42?
console.log(42 <= 43);
console.log(43 <= 42);
console.log("---------------------------");



//Strings vergleichen hier wird die Buchstaben mit Buchstabe vergleicht 

console.log("K" == "k");
console.log("K" > "k");
console.log("K" < "k");
console.log("---------------------------");

console.log("Rick" == "Rick");
console.log("Rick" == "Schein");
console.log("Rick" == "RICK");
console.log("---------------------------");

console.log("Rick" != "Rick");
console.log("Rick" != "Schein");
console.log("Rick" != "RICK");
console.log("---------------------------");

console.log("Rick" < "Rick");
console.log("Rick" < "Rick Schein");
console.log("Rick" < "RICK");
console.log("---------------------------");

console.log("Rick" > "Rick");
console.log("Rick" > "Rick Schein");
console.log("Rick" > "RICK");
console.log("---------------------------");

console.log("Rick" >= "Rick");
console.log("Rick" >= "Rick Schein");
console.log("Rick" >= "RICK");
console.log("---------------------------");

console.log("Rick" <= "Rick");
console.log("Rick" <= "Rick Schein");
console.log("Rick" <= "RICK");
console.log("---------------------------");

//Welcher String ist länger

console.log("Pete" < "Annabella");

//Operator für Strickte gleicheit

console.log("42" === 42);
console.log("42" !== 42);