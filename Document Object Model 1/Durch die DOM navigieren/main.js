"use strict";

let ul = document.querySelector("#navigation > ul");
//console.log(nav);

// Kindelemente 

let child_nodes = ul.childNodes; // alle Kindelemente inkl. Text- und Kommentarknoten (NodeList)
let children = ul.children; // alle Kindelemente exkl. Text- und Kommentarknoten (HTML-Collection)
let first_child = ul.firstChild; // erste Kindelement inkl. Text- und Kommentarknoten
let last_child = ul.lastChild; // letztes Kindelement inkl. Text- und Kommentarknoten

let first_element_child = ul.firstElementChild; // erstes Kindelemente exkl. Text- und Kommentarknoten
let last_element_child = ul.lastElementChild; // letztes Kindelemente exkl. Text- und Kommentarknoten

// Geschwisterelemente 

let next_sibling = ul.nextSibling; // nächstes Geschwisterelement inkl. Text- und Kommentarknoten
let previous_sibling = ul.previousSibling; // vorangehende Geschwisterelement inkl. Text- und Kommentarknoten
let next_element_sibling = ul.nextElementSibling; // nächstes Geschwisterelement exkl. Text- und Kommentarknoten
let previous_element_sibling = ul.previousElementSibling; // vorangehende Geschwisterelemente exkl. Text- und Kommentarknote

// Elternelement

let parent_element = ul.parentElement; // Elternelement eines Element



// Chaining (Verkettung)

let next_element_sibling_chaining = ul.firstElementChild.nextElementSibling; // 
let previous_element_sibling_chaining = ul.lastElementChild.previousElementSibling;

// Allgemeines navigieren

let anker = ul.querySelectorAll("li > a");

//-------- Kindelemente-----------

console.log(child_nodes);
console.log(children);
console.log(first_child);
console.log(last_child);
console.log(first_element_child);
console.log(last_element_child);

//--------Geschwisterelemente-----

console.log(next_sibling);
console.log(previous_sibling);
console.log(next_element_sibling);
console.log(previous_element_sibling);

//--------Elternelement--------------

console.log(parent_element);


//---------Chaining------------------

console.log(next_element_sibling_chaining);
console.log(previous_element_sibling_chaining);

//--------- Allgemeines navigieren

console.log(anker);