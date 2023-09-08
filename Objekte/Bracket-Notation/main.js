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

// Werte auslesen (Bracket-Notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_1["inhaber"]["geschlecht"];
console.log(wert_2);

// Eigenschaften setzen (Bracket-Notation)

konto_2["abhebelimit"] = 1000;
console.log(konto_2["abhebelimit"]);

// Werte setzen bzw. verändern (Bracket-Notation)

konto_1["kontostand"] = 3000;
console.log(konto_1["kontostand"]);

// Warum sollte wir die Bracket-Notation jemals verwenden?

let eigenschaft = "iban";
let wert_3 = konto_1[eigenschaft];
console.log(wert_3);

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

auto["ps"] = 350;
auto["modell"] = "Superb";


let eig = "ps";

console.log(`Ein ${auto["marke"]} ${auto["modell"]} hat ${auto[eig]} PS`);
console.log("Als String auslesen " + auto[eig]);

// Benutz man wenn man über einen String auf die Eigeschaft zu greifen möchte