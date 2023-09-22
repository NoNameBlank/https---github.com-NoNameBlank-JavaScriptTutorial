"use strict";

let formular = document.querySelector("form");

formular.addEventListener("submit", e => {
     e.preventDefault(); // Schnapp dir das Event und verhindere das das Standard verhalten ausgeführt wird
    console.log(e);
});

formular.addEventListener("reset", e => console.log(e));