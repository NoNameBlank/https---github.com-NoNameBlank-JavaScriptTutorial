"use strict";


let div = document.createElement("div");
div.setAttribute("id", "meine_id");
div.setAttribute("class", "meine_klasse");

let text = document.createTextNode("Lorem ipsum dolor sit amet.");




 // appendChild() das Element was hinzugefügt wird, wird als letztes Kindelement des Elternelement hinzugefügt
 // appendChild() prüft ob das Element was hinzugefügt werden soll bereits exestiert, wenn das Element bereits Exestiert wird es an der stelle Entfernt und statt dessen als letztes Kindelement eingefügt
 // appendChild() -Methode: fügt ein Element als letztes Kindelelement in ein Elternelement ein
 // appendChild() - Methode: existiert das Kindelement im Elternelement bereits, wird es entfernt und stattdessen als letztes Kindelement wieder angefügt



// Text zum div-Element hinzufügen
 div.appendChild(text);

 // Selection im Jumbotron selektieren
let jumbo = document.querySelector(".jumbotron > section");
// div-Element zur Section im Jumbotron hinzufügen
jumbo.appendChild(div);

// erstes Listenelement in ul in Navigation selektiert
let li = document.querySelector("#navigation > ul > li");

// ul in Navigation selektiert
let ul = document.querySelector("#navigation > ul"); 
// erstes Listenelement der ul erneut in ul eingefügt (allerdings durch appendChild()- Methode als letztes Kindelement)
ul.appendChild(li);
console.log(ul);







/*
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
*/