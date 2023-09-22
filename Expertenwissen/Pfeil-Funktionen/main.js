"use strict";



/**
 *      Regeln Fat Arrow Syntax
 * 1. Wir schreiben NICHT function() sondern schreiben NUR die () und anstatt "function" schreiben wir "=>"
 * 2. Wenn unsere Funktion nur aus einem Statment besteht können wir die "{}" weglassen 
 * 3. Wenn das Statment ein "return" Statment ist müssen wir auch das return weglassen.
 * 4. Wenn nur ein Parameter übergeben wird kann man den Parameter ohne Klammern angeben
 * 5. Wenn kein Parameter übergeben wird muss man die Klammern wieder machen ()
 * Wdh. Audrücke & Statements = einzelne Einweisung z.B. let i = 2; oder console.log(i); 
 */


const multiplizieren_1 = function(a, b){ return a * b; };
const multiplizieren_2 = (a, b) => { return a * b; };
const multiplizieren_3 = (a, b) => a * b;

console.log(multiplizieren_1(5,10));
console.log(multiplizieren_2(5,10));
console.log(multiplizieren_3(5,10));


const begruessung_1 = function(name) { return `Hallo ${name}`;};
const begruessung_2 = name => `Hallo ${name}`; // 
console.log(begruessung_1("Rick"));
console.log(begruessung_2("Morty"));

const sinnDesLebens_1 = function() {return 42;};
const sinnDesLebens_2 = () => 42;

console.log(sinnDesLebens_1());
console.log(sinnDesLebens_2());

let einkaufsliste = [
    "brot",
    "käse",
    "Butter",
    "Eier",
    "Orangensaft"
];

einkaufsliste.forEach(function (e){console.log(e);});
einkaufsliste.forEach(e => console.log(e));


// Dozent erklärung

/*  
    // Normale Funktion:
// const multiplizieren = function(a, b) { return a * b; };

// Regel 1: function-Keyword wird durch => nach Parametern ersetzt
const multiplizieren = (a, b) => { return a * b; };

// Regel 2: wenn die Logik der Funktion aus nur einem Ausdruck besteht, kann man die {} weglassen
// Regel 3: wenn es sich sogar nur um eine return-Anweisung handelt, kann auch das return weggelassen werden
const multiplizieren = (a, b) => a * b;

// Test-Ausgabe:
// console.log(multiplizieren(5, 10));

// Normale Funktion:
// const begruessung = function(name) { return `Hallo ${name}`; };

// Regel 4: wenn nur ein Parameter übergeben wird, können die () weggelassen werden
const begruessung = name => `Hallo ${name}`;

// Test-Ausgabe:
// console.log(begruessung("Max"));

// Normale Funktion:
// const sinnDesLebens = function() { return 42; };

// Regel 5: wenn keine Parameter übergeben werden, müssen leere () gesetzt werden
const sinnDesLebens = () => 42;

// Test-Ausgabe:
// console.log(sinnDesLebens());


// Praxis-Beispiel: Pfeil-Funktionen sind super praktisch z.B. in Call-Back-Funktionen 
// wie sie die forEach()-Methode erwartet
let einkaufsliste = [
    "Brot",
    "Käse",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangensaft"
];

// Normale Funktion:
// einkaufsliste.forEach(function(e) { console.log(e); });

// Pfeil-Funktion:
einkaufsliste.forEach(e => console.log(e));



*/
