"use strict";

/**
 *      getElementsByClassNames() & getElementsByTagName() --> HTML-Collection
 *      
 *      getElementById() & querySelector() --> Ein Element Object
 * 
 *      querySelectorAll() --> NodeList  
 * 
 *      HTML-Collection & NodeList sind Array ähnliche Objekte     
 *   
**/

// for-Schleife

let html_collection_1 = document.getElementsByClassName("jumbotron")
let html_collection_2 = document.getElementsByTagName("li");

for (let i = 0; i < html_collection_1.length; i++) {
    (console.log(html_collection_1[i]));
}



for (let i = 0; i < html_collection_2.length; i++) {
    console.log(html_collection_2[i]);
}

// for-of-Schleife

for (let e of html_collection_1){
    console.log(e);
}

for (let e of html_collection_2){
    console.log(e);
}

// Node-Lists

let node_list_01 = document.querySelectorAll("p");
console.log(node_list_01);

for(let i = 0; i < node_list_01.length; i++) {
    console.log(node_list_01[i]);
}

for (let e of node_list_01){
    console.log(e);
}

node_list_01.forEach(function(e){
    console.log(e);
});