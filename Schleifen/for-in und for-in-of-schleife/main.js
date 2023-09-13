"use strict";

let mein_array = [
    "Peter",
    "Mia",
    "Mark"
];

let mein_objekt = {
    name: "Max",
    vorname: "Mustermann",
    alter: 26
};

 console.log(mein_array);
 console.log(mein_objekt);

// for-in  Schleife durchläuft die Eigenschaften eines Objekts

for (let e in mein_array){
  console.log(e);
}

for (let e in mein_objekt){
    console.log(e);
    console.log(mein_objekt[e]);
}

// for-of Schleife durchläuft die Werte eines Arrays (iterable Objekte )
// for-of & forEach Methode in der Gleichen Kategorie

for (let w of mein_array){
    console.log(w);
}


// Geht nicht, da einfache Objekte nicht iterierbar sind
// for (let w of mein_objekt){
//     console.log(w);
// }