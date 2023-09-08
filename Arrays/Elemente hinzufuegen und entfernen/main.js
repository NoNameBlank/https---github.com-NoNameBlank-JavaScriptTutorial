"use strict";

let person = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia",
];

person[1] = "Pia";
console.log(person[1]);
console.log(person);

// push(): Fügt ein Element am Ende des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
// destruktiv heißt zerstören, doch meint das es verändert wird.

console.log(person.push("Max"));
console.log(person);

// pop(): Entfernt das letzte Element aus dem Array (und gibt es zurück)
// destruktiv

console.log(person.pop());
console.log(person);

// unshift(): Fügt ein Element an erster stelle des Arrays hinzu.
// destruktiv

console.log(person.unshift("Rick"));
console.log(person);

// shift(): Entfernt das erste Element des Arrays hinzu.
// destruktiv

console.log(person.shift());
console.log(person);