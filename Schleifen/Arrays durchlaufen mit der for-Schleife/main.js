"use strict";

let person = [
    "Peter",
    "Anna",
    "Marc",
    "Maximilian",
    "Mia"

];

console.log(person.length);

// for-Schleife Vorwärts

for(let i = 0; i < person.length; i++) {
    console.log(`Hallo ${person[i]}`);   
    
}

// for-Schleife Rückwärts

for(let i = person.length -1; i >= 0; i--) {
    console.log(`Bye ${person[i]}`); 
}