"use strict";

let konto_1 = {
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



let konto_2 = {
    iban: "DE69696969698888",
    bic: "WEASE5PXHK",
    inhaber: {
        vorname: "Morty",
        nachname: "Baum",
        geschlecht: "M",
        alter: 18
    },
    kontostand: 5500,
    aktiv: true
};

let kontostand_ausgabe = function(konto) {
    console.log(`Der Kontostand beträgt: ${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand} Euro auf dem Konto.`);
};

kontostand_ausgabe(konto_1);
kontostand_ausgabe(konto_2);


let einzahlung = function(konto) {
    konto.kontostand = konto.kontostand + 10000;
    console.log(`Der Kontostand beträgt: ${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand} Euro auf dem Konto.`);
};

einzahlung(konto_1);
einzahlung(konto_2);