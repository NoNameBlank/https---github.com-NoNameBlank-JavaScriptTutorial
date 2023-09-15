"use strict";

let meine_map = new Map();

meine_map.set("Test", "Wert der Eigenschaft Test.");
meine_map.set(13, "Wert der Eigenschaft 13.");
meine_map.set([], "Wert zur Eigenschaft [].");
meine_map.set(function(){}, "Wert zur Eigenschaft Funktion() {}.");
meine_map.set({}, "Wert der Eigenschaft {}");
//console.log(meine_map);

let mein_set = new Set();
mein_set.add("Test", "Wert der Eigenschaft Test.");
mein_set.add(13, "Wert der Eigenschaft 13.");
mein_set.add([], "Wert zur Eigenschaft [].");
mein_set.add(function(){}, "Wert zur Eigenschaft Funktion() {}.");
mein_set.add({}, "Wert der Eigenschaft {}")
//console.log(mein_set);

// console.log(meine_map.entries());
// console.log(meine_map.values());
// console.log(meine_map.keys());

// Über Maps iterieren
for (let [eigenschaft, wert] of meine_map.entries()) {
    console.log(eigenschaft);
    console.log(wert);
} 

for (let eigenschaft of meine_map.keys()) {
    console.log(eigenschaft);
}

for (let wert of meine_map.values()) {
    console.log(wert);
}

// Über Sets() iterieren

for (let wert of mein_set.values()) {
    console.log(wert);
 }