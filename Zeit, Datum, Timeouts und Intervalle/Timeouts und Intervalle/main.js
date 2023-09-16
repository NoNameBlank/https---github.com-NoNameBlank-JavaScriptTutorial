"use strict";

// Timeouts --> Zeitverzögerung wie man Code nach einer bestimmten Zeit ausführt.

// Intervalle --> Um Code immer wieder auszuführen z.B. alle 5 min

// Timeouts

// setTimeout(callback-funktion, zeitspanne[, parameter1, paramete2, ..., paramenterN])


console.log("Los!");
setTimeout(function() {
    console.log("Fertig!");
}, 2000);


// setTimeout(code-string, zeitspanne)

/* Kein Schöner weg!
console.log("Los!");
console.log(setTimeout("console.log(\"Fertig!\");", 2000));  // setTimeout("console.log('Fertig!');");

clearTimeout(1);
*/

// Intervalle

// setInterval(callback-funktion, zeitspanne[, parameter1, paramete2, ..., paramenterN])


setInterval(function() {
    console.log("1 Sekunde ist um!");
}, 1000);


// setInterval(code-string, zeitspanne)
console.log(setInterval("console.log(\" Eine Sekunde ist um!\");", 1000));
clearInterval(1);
