"use strict";


// Element erstellen
let div = document.createElement("div");
//console.log(div);

// Attribute erstellen
let attr = document.createAttribute("id");
//console.log(attr);
attr.value = "meine_id";
console.log(attr);

// Attribut hinzufügen
div.setAttributeNode(attr);

// Attribute erstellen UND hinzufügfen
div.setAttribute("class", "meine_klasse");



let text = document.createTextNode("Lorem ipsum dolor sit amet.");

console.log(text);
console.log(div);