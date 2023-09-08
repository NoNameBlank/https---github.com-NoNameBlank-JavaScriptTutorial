"use strict";

const person =  {
    vorname: "Rick",
    nachname: "Schein",
    alter: 32
};

person.vorname = "Test";
person.haarfarbe = "Blaue";

console.log(person);
delete person.haarfarbe;
console.log(person);

// Eigenschaften können verändert werden doch das Objekt an sich kann z.B. nicht verändert werden wie z.B. person = "Test";



