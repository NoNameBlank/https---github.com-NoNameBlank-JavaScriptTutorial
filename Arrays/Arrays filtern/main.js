"use strict";

// Arrays Filtern

let zahlen = [12, 23, 34, 77, 2, 32, 9, 55, 43, 11, 1];

let ergebnis = zahlen.filter((zahlen) => zahlen > 20);
console.log(ergebnis);

                                            // function (e) <-- das e bezieht sich bei jedem Schleifen durchgang auf den Aktuellen wert
let kleiner_gleich_zwanzig = zahlen.filter(function(e) {
    if(e <= 20) {
        return true;
    }else {
        return false;
    }
});

console.log(kleiner_gleich_zwanzig);

// Meine variante ohne Filter

let zahlenSortiert = [];


for(let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i]);
    if(zahlen[i] > 20) {
        zahlenSortiert.push(zahlen[i]);
    }
    
    
}

console.log(zahlenSortiert);
