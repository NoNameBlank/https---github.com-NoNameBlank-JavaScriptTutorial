"use strict";

// Elemente nach ID auswählen 

let element_by_id_1 = document.getElementById("navigation");
console.log(element_by_id_1);

let element_by_id_2 = document.getElementById("test"); // wenn keine ID gefunden wird : null
console.log(element_by_id_2);

// Elemente nach Klasse auswählen 


// Gibt eine Liste aller Elemente (HTML-Collection) die auf "jumbotron" zu treffen
let elements_by_classname_1 = document.getElementsByClassName("jumbotron");
console.log(elements_by_classname_1);

let elements_by_classname_2 = document.getElementsByClassName("Test");
console.log(elements_by_classname_2);
console.log(elements_by_classname_2.length == 0);


// Elemente nach Elementen (bzw. Tag-Name) auswählen

let els_by_tag_name_1 = document.getElementsByTagName("p");
console.log(els_by_tag_name_1);

let els_by_tag_name_2 = document.getElementsByTagName("Test");
console.log(els_by_tag_name_2);