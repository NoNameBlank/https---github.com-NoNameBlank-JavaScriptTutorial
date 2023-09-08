"use strict";

// Gültigkeitsbereich: Bereich in dem man Zugriff auf eine Variable hat 

// Globale Variablen: Wird außerhalb aller Codeblöcke definiert und ist von überall zugänglich
// Lokale Variabeln: Wird  innerhalb des Codeblocks definiert und ist auch nur in diesem und in den
// Codeblöcken die darin enthalten sind verfügbar

// Globalen Gültigkeitsbereich: variable_1
    // Lokaler Gültigkeitsbereich 1: variable_2
        // Lokaler Gültiksbereich 1.1: variable_3
    // Lokaler Gültigkeitsbreic 2: variable_4
        
let variable_1 = "Variable 1";

const meine_funktion = function() {
    let variable_2 = "Variable 2";

    if (true) {
        let variable_3 = "Variable 3";
        console.log(variable_1);
        console.log(variable_2);
        console.log(variable_3);
        
    }


    console.log(variable_1);
    console.log(variable_2);
    
};

meine_funktion();

console.log(variable_1);
//console.log(variable_2);
//console.log(variable_3);

if (true) {
    let variable_4 = "Variable 4";
}