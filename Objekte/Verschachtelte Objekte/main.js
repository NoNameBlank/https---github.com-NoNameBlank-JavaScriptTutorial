"use strict";

"use strict";

/*
let inhaber_1 = {
    vorname: "Rick",
    nachname: "Schein",
    geschlecht: "M",
    alter: 32
};

console.log(inhaber_1);

let inhaber_2 = {
    vorname: "Morty",
    nachname: "Baum",
    geschlecht: "M",
    alter: 18
};

console.log(inhaber_2);
*/

/*
let iban = "DE69696969696969";
let bic = "WEASE5PXHK";
let kontostand = 3500;
let aktiv = true;
*/

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

console.log(konto_1);

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

console.log(konto_2);

// Inhaber Objekt (Vornamen, Nachnamen, Geschlecht, Alter)


// Objekt für Auto

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