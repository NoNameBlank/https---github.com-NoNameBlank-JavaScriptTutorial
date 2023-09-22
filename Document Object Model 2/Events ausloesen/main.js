"use strict";

let link = document.querySelector("a.active");
let input = document.querySelector("input[type=text]");
let formular = document.querySelector("form");

// console.log(link);
// console.log(input);
// console.log(formular);

setTimeout(() => link.click(), 3000);
setTimeout(() => input.focus(), 6000);
setTimeout(() => input.blur(), 9000);
setTimeout(() => formular.reset(), 12000);
setTimeout(() =>formular.submit(), 15000);