"use strict";

// while-Schleife

let x = 0; // Zähler

while (x < 5)  { // Bedingung
    console.log(x); // Code
    x++;    // Anweisung für die Zählervarialbe
}
// Kann prüfen ob ein Block ausgeführt werden soll oder nicht


// for-Schleife
/*
for (Zählvariable; Bedingung; Anweisung für die Zählvariable) {
    // Code
}
*/
// Iteriert über irgendwas drüber 

for (let i = 0; i < 5; i++) {
    if(i == 3) {
        continue;
    } else if (i == 4) {
        break;
    }
    console.log(i);
}
console.log("for-Schleife ist beendet!");

// Vorsicht vor Endlosschleifen
/*
for (let j = 0; j >= 0; j++) {
    // ....
}
*/