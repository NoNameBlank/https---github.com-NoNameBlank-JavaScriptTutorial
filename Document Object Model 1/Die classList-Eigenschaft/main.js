"use strict";

let jumbo = document.querySelector(".jumbotron");
//console.log(jumbo);

let class_list = jumbo.classList;
console.log(class_list);

jumbo.classList.add("meine-klasse");
jumbo.classList.remove("jumbotron");
jumbo.classList.replace("meine-klasse", "deine-Klasse");
console.log(jumbo.classList.contains("deine-Klasse"));

// Ein- Ausschalter   Toggel
jumbo.classList.toggle("auch-eine-klasse");
jumbo.classList.toggle("auch-eine-klasse");
//console.log(jumbo);