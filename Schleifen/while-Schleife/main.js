"use strict";

/*
while(Bedingung)  {
    //....
}
*/

let x = 0; // <-- Zählvariable

while (x < 5){
    // x++;
    // x += x;
    // x = x + 1;
    console.log(`While: ${x}`);
    x++;
}

//  x = 1
//  x = 2
//  x = 3
//  x = 4
//  x = 5


// Vorsicht vor Endlosschleifen!
/*
let y = 0;

while (y >= 0 && y < 100) {  // && y < 100 entfernen und Endlosschleifen!!
    console.log("TEST!");
    y++;
}
*/

let z = 0;

while(z < 10){
    z++;
    if(z == 5){
        continue; // continue Aktulle Iteration wird abgebrochen d.h. für 5 wird kein console.log() ausgeben sondern der nächste Schleifen durchlauf wird gestartet! Ausgabe: 1,2,3,4,6,7,8,9,10
    }else if(z ==7){
        break;     // Schleife wird bei 7 abgebrochen Ausgabe: 1,2,3,4,6 
    }
    console.log(z);
}

console.log("Schleife beendet!");