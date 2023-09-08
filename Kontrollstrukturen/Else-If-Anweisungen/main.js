"use strict";

/*


//So sollte man es nicht machen^^

if (Bedingung1) {
    Code der ausgeführt wird, wenn die Bedingung1 erfüllt (true) ist
} else {

    if (Bedingung2) {
        Code der ausgeführt wird, wenn die Bedingung2 erfüllt (true) ist
    } else {
        
        if (Bedingung3) {
            Code der ausgeführt wird, wenn die Bedingung3 erfüllt (true) ist
        } else {
            Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
        }

    }

}


 //so sollte man es machen 

if(Bedingung){
    Code der ausgeführt wird, wenn die Bedingung1 erfüllt (true) ist
} else if (Bedingung2) {
    Code der ausgeführt wird, wenn die Bedingung2 erfüllt (true) ist
} else if (Bedingung3) {
    Code der ausgeführt wird, wenn die Bedingung3 erfüllt (true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
}
*/



const mindestAlter = 18;
let benutzerAlter = 11;

// if (benutzerAlter >= mindestAlter) {
//     if (benutzerAlter == mindestAlter) {
//         console.log("Du bist gerade alt genug!");
//     } else {
//         console.log("Du bist alt genug");
//     }
// } else {
//     console.log("Du bist NICHT alt genug!");
// }

if (benutzerAlter == mindestAlter) {
    console.log("Du bist gerade alt genug!");
} else if (benutzerAlter > mindestAlter) {
    console.log("Du bist alt genug");
} else {
    console.log("Du bist noch nicht alt genug!");
}