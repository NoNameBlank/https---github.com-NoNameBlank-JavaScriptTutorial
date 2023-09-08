"use strict";

// let meine_variable = "Rick";
// let mein_objekt = {
//     zahl: 5000
// };

// const meine_funktion = function(variable, objekt) {
//     variable = "Morty";
//     objekt.zahl = 2500;
// };

// meine_funktion(meine_variable, mein_objekt);

// console.log(meine_variable);
// console.log(mein_objekt.zahl);

// Call-By-Value (dt.: Übergabe als Wert): gilt für primitive Datentypen (String, Number, Boolean)
// Call-By-Reference (dt.: Überage als Verweis/Rückverweis): gilt für komplexere Datentypen (Objekte, Funktionen, Arrays)

// geld einzahlen    und geld auszahlen durch die Funktion das der Kontostand ändern    kontostand erhöen oder verringern


let konto = {
    iban: "DE69696969696969",
    bic: "WEASE5PXHK",
    inhaber: {
        vorname: "Rick",
        nachname: "Schein",
        geschlecht: "M",
        alter: 32
    },
    kontostand: 3500,
    aktiv: true

};

console.log("Kontostand vor ein/aus : " + konto.kontostand);

const geld_einzahlen = function(ko, ein) {
    //ko.kontostand = ko.kontostand + ein;
    ko.kontostand  += ein;
};

geld_einzahlen(konto, 500);
console.log("Kontostand nach ein: " + konto.kontostand);

const geld_auszahlen = function(ko, aus) { 
    //ko.kontostand = ko.kontostand - aus;
    ko.kontostand  -= aus;
};

geld_auszahlen(konto, 1000);
console.log("Kontostand nach aus: " + konto.kontostand);

