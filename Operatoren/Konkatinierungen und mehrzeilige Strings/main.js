"use strict";

//Konkantenierung von Strings

let vorname = "Rick";
let nachname = "Schein";
let alter = 32;

let name = vorname + " " + nachname;
console.log(name);

let begruessung = "Hallo " + name + "!";
console.log(begruessung);

let zusammenfassung = name + " (" + alter + " Jahre)";
console.log(zusammenfassung);

let einzeiliger_string = "Das ist ein einzeiliger String!";

let mehrzeiliger_string = "Ich will diesen String " +
"in der nächsten Zeile fortsetzen! " +
"\n\t Und wenn ich will, " + 
"kann es auch noch so weiter gehen ";

console.log(mehrzeiliger_string);