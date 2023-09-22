"use strict";

// input-Event wird bei jeder Veränderung der value-Eigeschaft gefuert
let input = document.querySelector("input[type=text]");
input.addEventListener("input", e => console.log(e));

let textare = document.querySelector("textarea");
textare.addEventListener("input", e => console.log(e));

// change-Event wird erst gefuert, wenn die Veränderung "abgeschlossen" ist
input.addEventListener("change", e => console.log(e));
textare.addEventListener("change", e => console.log(e));

let checkboxen = document.querySelectorAll("input[type=checkbox]");
checkboxen.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e);
        console.log(e.target.checked);
    });
});


let radiobuttons = document.querySelectorAll("input[type=radio]");
radiobuttons.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e);
        console.log(e.target.value);
    });
});

let range = document.querySelector("input[type=range");
range.addEventListener("change", e => {
    console.log(e);
    console.log(e.target.value);
});