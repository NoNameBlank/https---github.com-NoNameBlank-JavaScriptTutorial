"use strict";

/*
if (Bedingung) {
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung NICHT erfüllt (false) ist
}


if (false) {
    console.log("If wurde ausgeführt");
} else {
    console.log("Else wurde ausgeführt");
}


const mindestAlter = 18;
let benutzerAlter = 12;

if (benutzerAlter >= mindestAlter) {
    console.log("Du bist alt genug!");
} else {
    console.log("Du bist leider nicht als genug!");
}

*/

const mindestAlter = 18;
let benutzerAlter = 32;

if (benutzerAlter >= mindestAlter) {
    if (benutzerAlter == mindestAlter) {
        console.log("Du bist gerade alt genug!");
    } else {
        console.log("Du bist alt genug");
    }
} else {
    console.log("Du bist NICHT alt genug!");
}