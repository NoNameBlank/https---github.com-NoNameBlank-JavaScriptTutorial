"use strict";

// 3-Dimensionales Array

let auto = [
    [
        [
            "BMW",
            "Merci",
            "Audi"
        ],
        [
            "Lambo",
            "Ferrari",
            "Maseratti"
        ],
        [
            "Bugatti",
            "Koenigsegg",
            "Pagani"
        ]

    ],
    [
        [
            "Kawasaki",
            "Suzuki",
            "BNW"
        ],
        [
            "Test1",
            "Test2",
            "Test3"
        ],
        [
            "Test4",
            "Test5",
            "Test6"
        ]

    ],
    [
        [
            "Test7",
            "Test8",
            "Test9"
        ],
        [
            "Test 10",
            "Test 12",
            "Test 13"
        ],
        [
            "Test 14",
            "Test 15",
            "Test 16"
        ]

    ]
];

// console.log(auto);

for(let i = 0; i < auto.length; i++) {
    // console.log(auto[i]);
    for(let j = 0; j <auto[i].length; j++){
        // console.log(auto[i][j]);
        for(let z = 0; z < auto[j].length; z++) {
            console.log(`Ich mag ${auto[i][j][z]}`);
        }
    }
}