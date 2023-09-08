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

// Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.bic;
console.log(wert_2);

let wert_3 = konto_1.inhaber.vorname;
console.log(wert_3);

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat ${konto_1.kontostand} Euro auf dem Konto!`);


// Eigenschaften setzen (Dot-Notation)

konto_1.abhebelimit = 1000;
console.log(konto_1);
console.log(konto_1.abhebelimit);

// Werte setzen bzw. verändern (Dot-Notation)

konto_1.kontostand = 3000;
console.log(konto_1);

// Auto Objekt Aufgabe

let auto = {
    marke: "Skoda",
    modell: "Octavia VRS",
    krafstoffart: "Diesel",
    kilometerstand: 200000,
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach: false
    },
    zustand: "gebraucht",
    preis: 10000 
};

console.log(auto);

auto.ps = 170;
console.log(auto);

auto.modell = "VRS Racing";

console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps} PS.`);