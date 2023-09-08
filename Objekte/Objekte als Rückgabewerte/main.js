"use strict";

let person = {
    vorname: "Rick",
    nachname: "Schein",
    alter: 32
};

/*
const person_verarbeiten = function(p) {

    let name = `${p.vorname} ${p.nachname}`;
    let zusammenfassung = `${p.vorname} ${p.nachname} (${p.alter} Jahre)`;
    let begruessung = `Hallo ${p.vorname} ${p.nachname}!`;

    let rueckgabe_objekt = {
        n: name,
        z: zusammenfassung,
        b: begruessung
    };

    return rueckgabe_objekt;
};
*/

const person_verarbeiten = function (p) {

    return {
        n: `${p.vorname} ${p.nachname}`,
        z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
        b: `Hallo ${p.vorname} ${p.nachname}!`
    };

};

console.log(person_verarbeiten(person));