"use strict";

let vorname = "Rick";
let nachname = "Schein";
let alter = 32;

let name = vorname + " " + nachname;
console.log(name);

//Template Strings
let begruessung = `Hallo ${name}!`;
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(zusammenfassung);

//Mehrzeilige Template Strings
let mehrzeiliger_template_string = `Hallo ${name}!
Du bist ${alter} Jahre alt.
Wie geht es dir?`;
console.log(mehrzeiliger_template_string);

let konkatinierte_template_string = `Hallo ${name}! ` +
`Du bist ${alter} Jahre alt.` +
`Wie geht es dir?`;
console.log(konkatinierte_template_string);

