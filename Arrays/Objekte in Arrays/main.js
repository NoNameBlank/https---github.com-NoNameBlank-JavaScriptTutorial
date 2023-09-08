"use strict";
/*
let auto_1 = {
    marke: "BMW",
    model: "E46 330D",
    farbe: "Weiß"
};

let auto_2 = {
    marke: "BMW",
    model: "E91 330D",
    farbe: "Blau"
};

let auto_3 = {
    marke: "BMW",
    model: "E46 M3",
    farbe: "Weiß"
};

let autos = [
    auto_1,
    auto_2,
    auto_3
];

console.log(autos);
*/

let autos = [
    {
        marke: "BMW",
        model: "E46 330D",
        farbe: "Weiß"
    },
    {
        marke: "BMW",
        model: "E91 330D",
        farbe: "Blau"
    },
    {
        marke: "BMW",
        model: "E46 M3",
        farbe: "Weiß"
    }
];

console.log(autos);
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

console.log(autos[0].marke);
console.log(autos[0].model);

// Bracket-Notation
console.log(autos[0]["marke"]);


// Arrays im Objekt

let waren = {
    obst: [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    gemuse: [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    brot: [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
};

console.log(waren.obst);

console.log(waren.obst[0]);
console.log(waren.gemuse[2]);

