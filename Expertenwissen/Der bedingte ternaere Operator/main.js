"use strict";

// Bedingung ? Ausdruck_1 : Audruck_2    

/*
if (Bedingung) {
    Ausdruck_1;
} else {
    Ausdruck_2;
}
*/

let meine_zahl = 12;

/*
if(meine_zahl > 10) {
    console.log("Ja");
} else {
    console.log("nein");
}
*/

console.log(meine_zahl > 10 ? "Größer als 10!" : "Kleiner oder gleich 10!");

let geschlecht = 1;
// // if (geschlecht) {
//     console.log("Hallo Frau Mustermann!");
// } else {
//     console.log("Hallo Herr Mustermann");
// }

console.log(`Hallo ${geschlecht ? "Frau" : "Herr"} Mustermann!`);

let fuehrerschein = true;

/*
const fuehrerschein_kontrolle = function() {
    if (fuehrerschein) {
        return "Darf Autofahren!";
    } else {
        return "Darf nicht Autfahren!";
    }
};
*/
const fuehrerschein_kontrolle = function () {
    return fuehrerschein ? "Darf Autofahren!" : "Darf nicht Autofahren!";
};

console.log(fuehrerschein_kontrolle());


let erdbeschleunigung = 2.2;
let panik = false;

erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81) : (panik = false, erdbeschleunigung = 9.81)
console.log(erdbeschleunigung);
console.log(panik);

let farbe = "grün";
/*
if (farbe === "rot") {
    console.log("Ich mag rot!");
} else if (farbe === "blau") {
    console.log("Blau finde ich auch gut!");
} else if(farbe === "grün") {
    console.log("Grün mag ich nicht!");
} else {
    console.log(`Zu der Farbe ${farbe} habe ich keine meinung!`);
}
*/
console.log(farbe === "rot" ? "Ich mag rot!" : farbe === "blau" ? "Blau finde ich auch gut!" : farbe === "grün" ? "Grün man ich sehr!" : `Zu der Farbe ${farbe} habe ich keine meinung!`);