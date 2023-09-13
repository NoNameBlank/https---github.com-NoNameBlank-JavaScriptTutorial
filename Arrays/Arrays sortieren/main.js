"use strict";

// Arrays Sortieren

/* So Nicht mit zahlen!
let zahlen = [1, 20, 2000, 1000000, 50];

let neu_sortiert = zahlen.sort();

console.log(neu_sortiert);
*/

// Die sort()-Methode für Arrays wandelt Elemente des Arrays standardmäßig in Strings um und vergleicht diese

let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspann"];

let worte_neu = worte.sort();

console.log(worte_neu);

// Für das sortieren von Zahlen-Arrays sollte deshalb eine Vergleichsfunktion genutzt werden
// Ist Rückgabewert der Vergleichsfunktion < 0, wird a auf einen niedriegeren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt
// ISt Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist
// return a - b sortiert in aufsteigender Reihenfolge
// return b - a sortiert in absteigender Reihenfolge


let zahlen = [1, 20, 2000, 1000000, 50];

let zahlen_aufsteigend = zahlen.sort(function (a, b) {
    return a - b;
});


// let zahlen_absteigend = zahlen.sort(function (c, d) {
//     return d - c;
// });

console.log(zahlen_aufsteigend);
// console.log(zahlen_absteigend);