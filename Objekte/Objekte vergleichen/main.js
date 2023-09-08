"use strict";

// In JavaScript sind objekte niemals gleich außer es ist das selbe objket

let auto_1 = {
    marke: "BMW",
    model: "e46"
};

let auto_2 = {
    marke: "Skoda",
    model: "Octavia VRS"
};

let auto_3 = {
    marke: "Skoda",
    model: "Octavia VRS"
};

// console.log(auto_1 == auto_2);
// console.log(auto_2 == auto_3);
// console.log(auto_3 == auto_3);
// console.log({} == {});

// Challange

const vergleich = function(a1, a2) {
    //console.log(a1.marke == a2.marke && a1.model == a2.model)
    if(a1.marke == a2.marke && a1.model == a2.model){
        return true;
    } else {
        return false;
    }

};

console.log(vergleich(auto_2, auto_3));