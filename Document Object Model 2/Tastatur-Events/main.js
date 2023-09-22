"use strict";

document.addEventListener("keydown", e => {
    //console.log(e);
    if (e.key === "@") {
        console.log("Das @-Zeichen wurde gedrückt!");
    }
});


document.addEventListener("keyup", e => {
    if (e.key === "p") {
        console.log("Das P-Zeichen wurde gedrückt!");
    }
});

document.addEventListener("keypress", e => {
    if (e.key === ":") {
        console.log("Das :-Zeichen wurde gedrückt!");
    }
});
// Nachteil"keypress" Shift, Fn, Capslock werden nicht abgefangen
document.addEventListener("keypress", e => console.log(e)); 