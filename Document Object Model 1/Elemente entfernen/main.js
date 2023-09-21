"use strict";

// Elemente Entfernen

let nav = document.querySelector("#navigation");
console.log(nav);

nav.remove();

let jumbo = document.querySelectorAll(".jumbotron");
console.log(jumbo);

//jumbo.remove();

jumbo.forEach(function(e) {
    e.remove();
});

console.log(jumbo);