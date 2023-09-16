"use strict";

let d = new Date();
console.log(d);

// d.toLocaleString([schema(Die Schreibweise für Zeit und Datum z.B. de)[, optionen(z.B ob der Wochentag ausgeschrieben werden soll oder nicht)]])

let de_DE = d.toLocaleString("de-DE");
console.log(de_DE);

let en_US = d.toLocaleString("en-US");
console.log(en_US);

let optionen = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
};

let de_DE_2  = d.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
});
console.log(de_DE_2);


//

let de_DE_datum = d.toLocaleDateString("de-DE");  // Gibt nur das Datum zurück ohne Zeit
console.log(de_DE_datum);

let de_DE_zeit = d.toLocaleTimeString("de-DE", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
});
console.log(de_DE_zeit);