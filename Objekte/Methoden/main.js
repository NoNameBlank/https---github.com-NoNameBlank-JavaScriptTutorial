"use strict";

let konto = {
    iban: "DE69696969696969",
    bic: "WEASE5thisXHK",
    inhaber: {
        vorname: "Rick",
        nachname: "Schein",
        geschlecht: "M",
        alter: 32
    },
    kontostand: 3500,
    aktiv: true,
    geld_einzahlen(e) {
        this.kontostand  += e;
    },
    geld_auszahlen(a) {
        this.kontostand  -= a;
    }

};

konto.geld_einzahlen(1000);
console.log(konto.kontostand);


// Challange Methode in Objekt einbauen

let person = {
    vorname: "Rick",
    nachname: "Schein",
    alter: 32,
    verarbeiten() {
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        };
    }
};


/*
const thiserson_verarbeiten = function (this) {

    return {
        n: `${this.vorname} ${this.nachname}`,
        z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
        b: `Hallo ${this.vorname} ${this.nachname}!`
    };

};
*/
console.log(person.verarbeiten());