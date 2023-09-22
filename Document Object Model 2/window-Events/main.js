"use strict";

// Bildschirmgröße Abfragen
window.addEventListener("resize", e => console.log(e));

// Wenn der Benutzer Scrollt
window.addEventListener("scroll", e => {
    console.log(e);
    console.log(scrollX);
    console.log(scrollY);
});

// Prüfen ob Website und Ressourcen geladen sind
window.addEventListener("load", e => console.log(e));   