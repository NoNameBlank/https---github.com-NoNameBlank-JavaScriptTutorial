"use strict";

// appendChild();
let li = document.createElement("li");
li.setAttribute("id", "mein_listenelement");

let a = document.createElement("a");
a.setAttribute("id", "mein_ankerelement");
a.setAttribute("href", "#");

let text = document.createTextNode("Element");


a.appendChild(text);
li.appendChild(a);


//console.log(li);

let navigation = document.querySelector("#navigation > ul");
console.log(navigation);

//navigation.appendChild(li);
//console.log(navigation);

// insertAdjacentElement("wo das Elemnt eingesetzt wird", "was eingesetzt werden soll")

// navigation.insertAdjacentElement("beforebegin", li);
//navigation.insertAdjacentElement("afterbegin", li);
// navigation.insertAdjacentElement("beforeend", li);
// navigation.insertAdjacentElement("afterend", li);

let dom_string ="<li id=\"mein_listenelement\"><a id=\"mein_ankerlemenet\" href=\"#\">Element</a></li> ";

// insertAdjacentHTML("wo der DOM-String eingefügt werden soll","erwaretet einen DOM-String bzw mind. ein String")

//navigation.insertAdjacentHTML("beforebegin", dom_string);
//navigation.insertAdjacentHTML("afterbegin", dom_string);
//navigation.insertAdjacentHTML("beforeend", dom_string);
//navigation.insertAdjacentHTML("afterend", dom_string);

//insertAdjacentText("wo der Text eingefügt werden soll", "text"); 

let text_1 = "Lorem ipsum dolor sit amet.";

//navigation.insertAdjacentText("beforbegin", text_1);
navigation.insertAdjacentText("afterbein", text_1);
//navigation.insertAdjacentText("beforeend", text_1);
//navigation.insertAdjacentText("afterend", text_1);
console.log(navigation);


