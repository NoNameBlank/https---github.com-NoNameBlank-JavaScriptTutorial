"use strict";
// Element mit CSS-Selektor auswählen

let query_selector_1 = document.querySelector("body > #navigation > ul");
console.log(query_selector_1);

let query_selector_2 = document.querySelector(".jumbotron");
console.log(query_selector_2);


let query_selector_3 = document.querySelector(".test");
console.log(query_selector_3);


// let query_selector_4 = document.querySelector("%67§ >");
// console.log(query_selector_4);

// Elemente mit CSS-Selektor auswählen

let query_selector_all_1 = document.querySelectorAll("body > #navigation > ul > li > a");
console.log(query_selector_all_1);

let query_selector_all_2 = document.querySelectorAll("Test");
console.log(query_selector_all_2);
console.log(query_selector_all_2.length == 0);

//let query_selector_all_3 = document.querySelectorAll("%67%");