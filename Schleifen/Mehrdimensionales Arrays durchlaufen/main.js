"use strict";

let waren = [
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
];

console.log(waren);

for (let i = 0; i < waren.length; i++) {
    console.log(`Ich mag ${waren[i]}`);
    for (let j = 0; j < waren[i].length; j++) {
        console.log(`Ich mag ${waren[i][j]}`);
       
    }

}


