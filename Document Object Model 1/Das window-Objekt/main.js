"use strict";

// Window Objekt repräsentiert die Aktuell geöffnete Browserfenster und bildes somit den Rahmen für alle anderen Objekte


console.log(window);

// Eigenschaften des window-Objekts
window.innerWidth;
// Das geht weil auf kein andres Objekt referenziert wird und es das "HauptObjekt" ist.
console.log(innerWidth);  
console.log(innerHeight);
console.log(outerWidth); // gibt gesamt breite vom fenster an 
console.log(outerHeight); // von ganz oben bis ganz unten
console.log(scrollX); // gibt aktuellen scroll wert X-Achse
console.log(scrollY); // Y-Achse

// Für Später im Kurs...
console.log(location);
console.log(localStorage);
console.log(sessionStorage);

// Methoden des Window-Objekts
//alert("ACHTUNG!");
//console.log(confirm("Bist du dir sicher?"));
//let antwort = prompt("Wie geht es dir?");
//console.log(antwort);
//print();
//open("https//www.google.de");
//close();

// Wichtig später im kurs
let nav = document.querySelector("#navigation");
let nav_styles = getComputedStyle(nav);
console.log(nav_styles);