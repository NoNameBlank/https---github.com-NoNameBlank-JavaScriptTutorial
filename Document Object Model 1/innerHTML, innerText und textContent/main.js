"use strict";


let jumbo = document.querySelector(".jumbotron");
//console.log(jumbo);

// innerHTML -> gibt die HTML-Struktur in einem Element inklusive alle Texte wieder genau so wie sie im Quelltext stehen würde
//console.log(jumbo.innerHTML);
// innerText -> gibt den gesamten Text inhalt eines Elements und alle seine Kindelemente und nachfahren elemente zurück und achtet dadrauf die die Elemente im Frontend dargestellt werden
// die Eigenschaft zeigt die gerenderten Textinhalte (Script und Style werden von innerText nicht zurück gegeben!)
//console.log(jumbo.innerText);
// gibt den Text eines HTML-Elements und seine Kindelemente und Nachfahrenelemente zurück, allerdings ohne Rücksicht auf den gerednetet Text im Frontend
//console.log(jumbo.textContent);


// eigenschaften hinzufügen

let string_1 = "";
let string_2 = "<header><h2>Lorem ipsum dolor sit amet </h2></header>"; // DOM-String ein String mit HTML-Elementen
let string_3 = "<p>Lorem ipsum dolor sit amet.</p>"; // DOM-String
let string_4 = "Lorem ipsum dolor sit amet."; // Normaler-String


// Wenn man den Inhalt auf einen Leeren String setzt, löscht man den Inhalt der davor war
//jumbo.innerHTML = string_1;
//jumbo.innerHTML = string_2;
//jumbo.innerHTML += string_3;

//jumbo.innerText = string_1;
//jumbo.innerText = string_2;
//jumbo.innerText += string_3;

//jumbo.textContent = string_1;
//jumbo.textContent = string_2;
//jumbo.textContent += string_3;

