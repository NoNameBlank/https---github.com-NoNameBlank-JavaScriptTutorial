"use strict";

// function(a, b = 10)  b ist der default wert
const multiplizieren = function(a, b = 10) {
    console.log(a);
    console.log(b);
    console.log(a * b);  
};

let z1 = 5;
let z2 = 5;

multiplizieren(z1, z2);

/*
 Aufgabe: Definiet eine Funktion für eine Begrüßung
        - 3 Parameter übergeben bekommen ( vorname, nachname, alter)
        - console.log mit Hallo vorname, nachname du bist XX Jahre alt.
        - default werte der Funktion:  max, musternamen, 18


        3 Variablen vorname, nachname, alter

        Funktion 2 mal aufrufen einmal mit default Parameter und mit variablen


*/


const begruessung = function(defVorname = "Max", defNachname = "Mustermann", defAlter = 18) {
    console.log(`Hallo ${defVorname} ${defNachname} du bist ${defAlter} Jahre alt!`);
};

let vorname = "Rick";
let nachname = "Schein";
let alter = 32;

begruessung();
begruessung(vorname, nachname, alter);
begruessung(undefined, nachname, alter);