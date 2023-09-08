"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

// includes(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt true zurück, wenn das
// Element gefunden wurde, bzw. false, wenn es nicht gefunden wurde
// Syntax: includes(Suchwert, Startindex)  Startindex wie man möchte
// nich destruktiv 

console.log(personen.includes("Anna"));
console.log(personen.includes("Sebastian", 2));
console.log(personen.includes("Mia", 2));

// indexOf(): Dursucht das Array ab einem Startindex nach einem Wert und gibt den Index der ersten Fundstelle
// zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: indexOf(Suchwert, [Startindex])
// nicht desktruktiv

console.log(personen.indexOf("Sebastian"));
console.log(personen);
console.log(personen.indexOf("Sebastian", [2]));
console.log(personen.indexOf("Mia", [2]));

// lastIndexOf(): Dursucht das Array ab einem Stratindex rückwärts nach einem Wert und gibt den Index der ersten Fundstelle
// zurück, wenn der Wert gefunden wurde, oder -1 wenn der Wert nicht im Array gefunden wurde
// Syntax: lastIndexOf(Suchwert, Startindex)
// nicht destruktiv 

console.log(personen.lastIndexOf("Sebastian"));
console.log(personen.lastIndexOf("Sebastian", [2]));
console.log(personen.lastIndexOf("Mia", [2]));
