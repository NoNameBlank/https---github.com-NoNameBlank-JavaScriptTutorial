"use strict";

// ClassName

let jumbo = document.querySelector(".jumbotron");

let classes = jumbo.className; 
//console.log(classes);

jumbo.className = "meine_klasse";

jumbo.className += " lorem";

jumbo.className = jumbo.className.replace("meine", "deine");

jumbo.className = jumbo.className.replace(" lorem", "");

/*

let ul = document.querySelector("ul");
console.log(ul);

let active = document.querySelector(".active");
//console.log(active);


ul.insertAdjacentElement("beforeend", active);
console.log(ul);


 let li = document.querySelector("li");
 console.log(li);

 li.insertAdjacentElement("beforeend", active);
 console.log(li);

*/

document.querySelector("#navigation > ul > li:first-of-type > a").className = "";
document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className = "active";