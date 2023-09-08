"use strict";

let auto = {
    marke: "BMW",

};

// Eigenschaft ändern
auto.marke = "Skoda";

// Eigenschaften hinzufügen
auto.modell = "Octavia";
auto.ps = 300;
auto["farbe"] = "rot";

// Eigenschaften entfernen
delete auto.farbe;


console.log(auto);